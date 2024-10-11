const express = require('express');
const { validateLogin, validateRegister } = require('../middlewares/validator');
const { loginService } = require('../services/authService');
const router = express.Router();
const { loginController, registerController } = require('../controllers/authController');
router.post("/login", validateLogin, loginController);
router.post("/register", validateRegister ,registerController)
module.exports = router;