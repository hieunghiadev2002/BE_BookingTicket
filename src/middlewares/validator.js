const { check, validationResult } = require('express-validator');
const HttpStatusCodes = require('../common/httpStatusCodes');
const mongoose = require('mongoose'); // Đảm bảo import mongoose
const chuyenXeService = require('../services/chuyenXeService');

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
  validateCreateBenXe() {
    return [
      check('tenBenXe', 'Ten ben xe is required').exists(),
      check('diaChi', 'Dia chi is required').exists(),
      check('tinhThanh', 'Tinh Thanh is required').exists(),
      check('tinhThanh', 'Tinh Thanh is not valid').isMongoId(),
      (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res
            .status(HttpStatusCodes.BAD_REQUEST)
            .json({ errors: errors.array() });
        }
        next();
      },
    ];
  }
  validateCreateBooking() {
    return [
      check('chuyenXe', 'Chuyen Xe is required').exists(),
      check('chuyenXe', 'Chuyen Xe is not valid').isMongoId(),
      check('danhSachGhe', 'Danh Sach Ghe is required').exists(),
      check('danhSachGhe', 'Danh Sach Ghe is not valid').isArray(),

      //check('user', 'User is required').exists(),
      (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res
            .status(HttpStatusCodes.BAD_REQUEST)
            .json({ errors: errors.array() });
        }
        next();
      },
    ];
  }
  checkValidateGetTicketByUserId(req, res, next) {
    if (
      !req.params ||
      !req.params.id ||
      !mongoose.Types.ObjectId.isValid(req.params.id)
    ) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json({
        status: 'false',
        message: 'Id is not valid',
      });
    }
    next();
  }
  async checkChuyenXeExists(ngayDi, ngayDen, giaChuyenXe, tuyenXe, xe) {
    return await chuyenXeService.findChuyenXe({
      ngayDi,
      ngayDen,
      giaChuyenXe,
      tuyenXe,
      xe,
    });
  }
}

module.exports = new validator();
