const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res
      .status(401)
      .json({ status: "false", message: "Access denied: token not provided" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log(err);
    if (err) {
      return res.status(403).json({ message: "Access denied: invalid token" });
    }
    req.user = user;
    next();
  });
};
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Access denied: insufficient permissions" });
    }
    next();
  };
};

module.exports = { authenticateToken, authorizeRoles };
