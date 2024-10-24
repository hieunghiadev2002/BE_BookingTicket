const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../models/User");
const response = require("../utils/response");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {generateToken} = require("../helpers/helper");
const generateOTP = require("../helpers/helper");
const emailService = require('../services/emailService');
const refreshTokenSchema = require("../models/RefreshToken");
const userSchema = require("../models/User");
const { generateOTPEmail } = require("../helpers/emailTemplates");
const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};
const comparePassword = async (inputPassword, userPassword) => {
  return await bcrypt.compare(inputPassword, userPassword);
};

//login service
const loginService = async (email, password) => {
  let user = await findUserByEmail(email);
  if (!user) return response("false", "Email or password is invalid");
  let isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    return response("false", "Email or password is invalid");
  }
  const payload = {
    user: {
      id: user.id,
      role: user.role,
      fullName: user.fullName,
      email: user.email,
    },
  };
  const accessToken =  generateToken(payload, "1h");
  const refreshToken =  generateToken(payload, "7d");
  if(!accessToken || !refreshToken) return response("false", "Error generating token");
  //kiem tra xem refreshToken da ton tai chua
  const existingRefreshToken = await refreshTokenSchema.findOne({ user: user.id });
  if(existingRefreshToken)
  {
    existingRefreshToken.token = refreshToken;
    existingRefreshToken.expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
 await existingRefreshToken.save();
  }else 
  {
      const newRefreshToken = new refreshTokenSchema({
    token: refreshToken,
    user: user.id,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
  await newRefreshToken.save(); 
  }
    
  
  return response("true", "User logged in successfully", { accessToken, refreshToken });
};
const registerService = (fullName, email, password, phoneNumber) => {
  //check if user exists
  const checkEmail = userSchema.findOne({ email });
  const checkPhone = userSchema.findOne({ phoneNumber });
  if(!checkEmail || !checkPhone){
    return response("false", "User already exists");
  }
  //Encrypt password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const generateOTP = Math.floor(100000 + Math.random() * 900000);
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000); 
  const newUser = new User({
    fullName,
    email,
    password: hash,
    phoneNumber,
    role: "user",
    otp: generateOTP,
    otpExpires,
  });
  newUser.save();
  //Send OTP to user
  console.log('log new user: ', newUser)
  console.log('log otp: ', generateOTP) 
  const result = emailService.sendOTP(email, 'OTP', generateOTPEmail(newUser, generateOTP));
  return response("true", "User registered successfully");
};
const verifyOtpService = async (email, otp) => {
  try {
    const user = await userSchema.findOne({email, otp})
    if(!user)
    {
      return response("false", "Invalid OTP")
    }
    if(user.otpExpires < Date.now())
    {
      return response("false", "OTP expired please resend again OTP")
    }
    //clear otp 
    user.otp = null
    user.otpExpires = null
    user.otpVerified = true
    //save user
    await user.save()
    return response("true", "OTP verified successfully")
  } catch (error) {
      return response("false", "An error occurred during OTP verification", error.message);
  }
}
const resendOTPService = async (email) => {
  try {
    const user = await userSchema.findOne({email});
    if(!user)
    {
      throw Error("User not found")
    }
    const newOTP = Math.floor(100000 + Math.random() * 900000);
    const otpExpiresAt = Date.now() + 10 * 60 * 1000;
    user.otp = newOTP; 
    user.otpExpires = otpExpiresAt; 
    await emailService.sendOTP(user, "New OTP")
    await user.save();
  } catch (error) {
    
  }
}
module.exports = {
  loginService,
  registerService,
  verifyOtpService, 
  resendOTPService
};
