const SeatSchema = require('../models/ViTriGhe');
class viTriGheService {
  async getViTriGheByPrefix(prefix) {
    return SeatSchema.find({ soGhe: { $regex: `^${prefix}` } });
  }
}
module.exports = new viTriGheService();
