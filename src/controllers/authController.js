const { loginService, registerService } = require('../services/authService');

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Check if user exists 
    const result = await loginService(email, password);
    if(result.status === "false"){
      return res.status(400).json(result);
    }
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
     res.status(500).json({ message: "Internal Server Error" });
  }
}
const registerController = async (req, res) => {
  try{
    const { fullName, email, password, phoneNumber } = req.body;
    const result = await registerService(fullName, email, password, phoneNumber);
    if(result.status === "false"){
      return res.status(400).json(result);
    }
    return res.status(200).json(result);
  }catch(err)
  {
    console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
  }
}
module.exports = {
  loginController, 
  registerController
}