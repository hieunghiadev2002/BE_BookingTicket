const crypto = require("crypto");
class TokenService {
  constructor() {}
  async generateToken() {
    return crypto.randomBytes(20).toString("hex");
  }
}
module.exports = new TokenService();
