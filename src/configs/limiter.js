const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10000000,
  message: 'Too many requests from this IP, please try again after an hour',
  headers: true,
});
module.exports = limiter;
