const { loginService, registerService, verifyOtpService } = require("../services/authService");
const userService = require("../services/userService");
const tokenService = require("../services/tokenService");

class authController {
  constructor() {}
  //Login controller
  async login(req, res) {
    try {
      console.log("login");
      const { email, password } = req.body;
      //Check if user exists
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
async resendOTP(req, res){
  const {email} = req.body; 
  
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
  const {email, newPassword} = req.body; 

}
}

module.exports = new authController();
