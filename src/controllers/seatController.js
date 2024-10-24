const Seat = require('../models/ViTriGhe');
class seatController {
  constructor() {}
  async getSeats(req, res) {
    try {
      const { idXe } = req.query;
      const seats = await Seat.find({ idXe });
      return res.status(200).json({
        status: 'success',
        seats,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'false',
        message: 'An error occurred while getting seats',
        error: error.message,
      });
    }
  }
}
module.exports = new seatController();