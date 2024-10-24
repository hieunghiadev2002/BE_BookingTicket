const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const validator = require("../middlewares/validator");
const checkDuplicateEmailPhone = require("../middlewares/checkDuplicates");

router.post("/login", validator.validateLogin(), authController.login);
router.post("/register", validator.validateRegister(),
checkDuplicateEmailPhone, authController.register);
router.post("/forgot-password", validator.validationForgotPassword(), authController.forgotPassword);
router.post("/reset-password", (req, res) => {
  return res.status(200).json({ message: "Reset Password" });
});
router.post('/verify-otp',validator.validateVerifyOtp(), authController.verifyOtp)
router.post('/resend-otp',validator.validateResendOTP() ,(req, res) => {  
  return res.status(200).json({
    message: "Resend OTP"
  })
})
router.post('/request-otp', (req, res) => {
  return res.status(200).json({
    message: "Request OTP"
  })
})
router.post('/change-password', (req, res) => {
  return res.status(200).json({
    message: "Change Password"
  })
})
router.post('/reset-password', (req, res)=>{
  return res.status(200).json({
    message: "Reset Password" 
  })
})
module.exports = router;
