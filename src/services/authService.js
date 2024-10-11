const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../models/User");
const response = require("../utils/response");
const jwt = require("jsonwebtoken");
require("dotenv").config(); 
const findUserByEmail = async (email) => {
  return await User.findOne({email}) 
};
const comparePassword = async (inputPassword, userPassword) =>{
  return await bcrypt.compare(inputPassword, userPassword);
}
const generateToken = async (payload) => {
    return await new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });
};

const loginService = async (email, password) => {
  let user = await findUserByEmail(email);
  if(!user)
    return response("false", "Email or password is invalid");
    let isMatch = await comparePassword(password, user.password);
    if(!isMatch){
      return response("false", "Password is incorrect");
    }
    const payload = {
        user: {
            id: user.id, 
            role: user.role
        }
    }
    const token = await generateToken(payload);
    return response("true", "User logged in successfully", {token});
}
const registerService = (fullName, email, password,  phoneNumber) => {
  //check if user exists 
  const user = findUserByEmail(email);
  if(!user)
  {
    return response("false", "User already exists");
  }
  //Encrypt password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  //Create new user
  const newUser = new User({fullName, email, password: hash, phoneNumber, role: "user"});
  newUser.save();
  return response("true", "User registered successfully");
};

module.exports = {
  loginService, 
  registerService
}