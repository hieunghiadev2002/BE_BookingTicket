const { check, validationResult } = require('express-validator');

class validator {
  constructor() {}

  validateLogin() {
    return [
      check('email', 'Email is not valid').isEmail(),
      check('password', 'Password is required').exists(),
      (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      },
    ];
  }

  validateRegister() {
    return [
      check('fullName', 'Full name is required').exists(),
      check('email', 'Email is not valid').isEmail(),
      check('email', 'Email is invalid').normalizeEmail().isEmail(),
      check('password', 'Password is required').exists(),
      check('password', 'Password must be at least 6 characters').isLength({
        min: 6,
      }),
      check('phoneNumber', 'Phone number is required').exists(),
      check('phoneNumber', 'Phone number is not valid').isMobilePhone(),
      (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      },
    ];
  }

  validationForgotPassword() {
    return [
      check('email', 'Email is not valid').isEmail(),
      check('email', 'Email is required').exists(),
      (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      },
    ];
  }

  validateVerifyOtp() {
    return [
      check('email', 'Email is not valid').isEmail(),
      check('email', 'Email is required').exists(),
      check('otp', 'OTP is not required').exists(),
      (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      },
    ];
  }
  validateResendOTP() {
    return [
      check('email', 'Email is not valid').isEmail(),
      check('email', 'Email is required').exists(),
      (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      },
    ];
  }
}

module.exports = new validator();
