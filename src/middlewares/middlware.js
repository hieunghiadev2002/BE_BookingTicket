const HttpStatusCodes = require('../common/httpStatusCodes');
const UserSchema = require('../models/User');
const checkIsActiveUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingUser = await UserSchema.findOne({ email });
    if (existingUser.isActive === false) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json({
        status: 'false',
        message: "User hasn't been activated yet",
      });
    }
    next();
  } catch (error) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      status: 'false',
      message: error.message,
    });
  }
};
module.exports = { checkIsActiveUser };
