const LoaiXe = require('../models/LoaiXe');
const userSchema = require('../models/User');
async function checkDuplicateEmailPhone(req, res, next) {
  const { email, phoneNumber } = req.body;
  const userWithEmail = await userSchema.findOne({ email });
  const userWithPhoneNumber = await userSchema.findOne({ phoneNumber });
  if (userWithEmail) {
    return res.status(400).json({ message: 'Email already exists' });
  }
  if (userWithPhoneNumber) {
    return res.status(400).json({ message: 'Phone number already exists' });
  }
  next();
}
async function checkDuplicateVehicleType(req, res, next) {
  const { tenLoaiXe } = req.body;
  try {
    const existingVehicleType = await LoaiXe.findOne({
      tenLoaiXe,
    });
    if (existingVehicleType) {
      return res.status(400).json({
        status: 'false',
        message: 'Vehicle type already exists',
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      status: 'false',
      message: 'An error occurred while checking for duplicate vehicle type',
      error: error.message,
    });
  }
}

module.exports = { checkDuplicateEmailPhone, checkDuplicateVehicleType };
