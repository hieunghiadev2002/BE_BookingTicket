const BookingSchema = require('../models/Ticket');
const SeatSchema = require('../models/ViTriGhe');
class SeatService {
  async checkSeatAvailability({ chuyenXeId, danhSachGhe }) {
    try {
      const bookings = await BookingSchema.find({
        chuyenXe: chuyenXeId,
        danhSachGhe: { $in: danhSachGhe },
      });
      return bookings.length === 0;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getViTriGheByPrefix(prefix) {
    return SeatSchema.find({ soGhe: { $regex: `^${prefix}` } });
  }
}

module.exports = new SeatService();
