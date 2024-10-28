const jwt = require('jsonwebtoken');
const HttpStatusCodes = require('../common/httpStatusCodes');
require('dotenv').config();
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.status(HttpStatusCodes.UNAUTHORIZED).json({
      status: 'false',
      message: 'Truy cập bị từ chối: Token chưa được gửi lên server',
    });
  }
  // eslint-disable-next-line no-undef
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log(err);
    if (err) {
      return res
        .status(403)
        .json({ message: 'Truy cập bị từ chối: Token chưa hợp lệ' });
    }
    req.user = user;
    next();
  });
};
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    const userRole = req.user.user.role;
    console.log(userRole);
    if (!req.user || !roles.includes(userRole)) {
      return res.status(403).json({
        status: 'false',
        message: 'Truy cập bị từ chối, bạn không có quyền truy cập',
      });
    }
    next();
  };
};

module.exports = { authenticateToken, authorizeRoles };
