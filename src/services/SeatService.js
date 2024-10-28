const BookingSchema = require('../models/Ticket');
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
}

module.exports = new SeatService();
