const userSchema = require("../models/User");
async function checkDuplicateEmailPhone(req, res, next){
  const {email, phoneNumber} = req.body;  
  const userWithEmail = await userSchema.findOne({email});
  const userWithPhoneNumber = await userSchema.findOne({phoneNumber});
  if(userWithEmail){
    return res.status(400).json({message: "Email already exists"});
  }
  if(userWithPhoneNumber){
    return res.status(400).json({message: "Phone number already exists"});
  }
  next();
}

module.exports = checkDuplicateEmailPhone;