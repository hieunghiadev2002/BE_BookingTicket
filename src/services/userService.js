const User = require("../models/User");
class userService {
  constructor() {
    
  }

  async findUserByEmail(email) {
    return await User.findOne({ email });
  }
  async findUserById(id) {
    return User.findById(id);
  }
  async saveUser(user) {
    return await user.save();
  }
}
module.exports = new userService();
