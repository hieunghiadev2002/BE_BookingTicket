const { loginService, registerService, verifyOtpService } = require("../services/authService");
const userService = require("../services/userService");
const tokenService = require("../services/tokenService");

class authController {
  constructor() {}
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await loginService(email, password);
      if (result.status === "false") {
        return res.status(400).json(result);
      }
      return res.status(200).json({
        status: true, 
        message: "Login successfully",
        result: result.data
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  //register account
  async register(req, res) {
    try {
      const { fullName, email, password, phoneNumber } = req.body;
      const result = registerService(fullName, email, password, phoneNumber);
      if (result.status === "false") {
        return res.status(400).json(result);
      }
      return res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  //logout
  async logout(req, res) {
    try {
      req.logout();
      res.status(200).json({ message: "Logout Success" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  //forgot password
  async forgotPassword(req, res) {
    try {
      const { email } = req.body;
      if (!email == null) {
        return res
          .status(200)
          .json({ status: false, message: "Email is required" });
      }
      //check if user exists
      const existingUser = await userService.findUserByEmail(email);
      if (!existingUser) {
        return res
          .status(200)
          .json({ status: false, message: "User not found" });
      }
      //Generate token
      existingUser.resetPasswordToken = await tokenService.generateToken();
      console.log("log token: " + existingUser.resetPasswordToken);
      existingUser.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      await userService.saveUser(existingUser);
      return res.status(200).json({
        status: true,
        message: "Forgot password successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  //reset password
  async resetPassword(req, res) {
    try {
      const { token, password } = req.body;
      if (!token || !password) {
        return res
          .status(400)
          .json({ status: false, message: "Token and password are required" });
      }
    } catch (error) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  //verify otp
  async verifyOtp(req, res){
    try
    {
      const {email, otp} = req.body; 

      console.log(email, otp)
    const result = await verifyOtpService(email, otp);
    console.log(result)
    if(result === 'true')
    {
      return res.status(200).json(result)
    }else 
    {
      return res.status(500).json(result)
    }
    }catch(error)
    {
      return res.status(500).json({
        error
      })
    }
}
//resend otp
async resendOTP(req, res){
  try{
    const {email} = req.body;
    console.log(email)
    const existingUser = await userService.findUserByEmail(email);
    if(!existingUser)
    {
      return res.status(200).json({
        status: "false",
        message: "User not found"
      })
    }
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(otp)
    existingUser.otp = otp;
    await userService.saveUser(existingUser);
    return res.status(200).json({
      status: "true",
      message: "Resend otp successfully"
    })
  }catch(error)
  {
    console.error(error)
    return res.status(500).json({
      message: "Internal Server Error"
    })
  }  
}
async requestOTP(req, res){
  const {email} = req.body;
  if(!email){
    return res.status(400).json({
      status: "false", 
      message: "Email is required"
    })
  }
  try {
    
  } catch (error) {
    
  }
}
async changePassword(req, res){
  return res.status(200).json({
    mgs: 'Not implemented yet'
  })

}
}

module.exports = new authController();
