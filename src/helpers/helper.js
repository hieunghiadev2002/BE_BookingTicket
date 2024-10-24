const jwt = require('jsonwebtoken');
const crypto = require('crypto');

function generateToken(payload, expiresIn) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
}
function generateOTP() {
  return crypto.randomInt(100000, 999999);
}
module.exports = { generateToken, generateOTP };
