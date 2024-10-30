const BookingSchema = require('../models/Ticket');
const ChiTietGheSchema = require('../models/ChiTietGhe');
const stripe = require('stripe')(process.env.SECRET_KEY_STRIPE);
class BookingService {
  constructor() {}
  async createBooking({
    chuyenXe,
    danhSachGhe,
    user,
    tongTien,
    trangThaiVe,
    ngayLapVe,
  }) {
    try {
      const chiTietGhe = await ChiTietGheSchema.findOne({
        danhSachGhe,
        chuyenXe,
      });
      for (const viTriGhe of danhSachGhe) {
        const chiTietGhe = await ChiTietGheSchema.findOne({
          viTriGhe,
          chuyenXe,
        });
        if (!chiTietGhe) {
          throw new Error(
            `Không tìm thấy chi tiết ghế phù hợp cho vị trí ghế: ${viTriGhe}`,
          );
        }
      }

      for (const viTriGhe of danhSachGhe) {
        const chiTietGhe = await ChiTietGheSchema.findOne({
          viTriGhe,
          chuyenXe,
        });
        if (chiTietGhe.trangThai == 'Đã Đặt') {
          throw new Error(`Ghế này đã được Đặt: ${viTriGhe}`);
        }
      }

      for (const viTriGhe of danhSachGhe) {
        const chiTietGhe = await ChiTietGheSchema.findOne({
          viTriGhe,
          chuyenXe,
        });
        chiTietGhe.trangThai = 'Đã Đặt';
        await chiTietGhe.save();
      }

      const newBooking = new BookingSchema({
        chuyenXe,
        danhSachGhe,
        user,
        tongTien,
        trangThaiVe: 'completed',
        ngayLapVe: Date.now(),
      });
      await newBooking.save();
      return newBooking;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async processPayment({ amount, currency, paymentMethodId }) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        payment_method: paymentMethodId,
        confirm: true,
      });
      return { success: true, data: paymentIntent };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  // async getAllTickets() {
  //   try {
  //     return BookingSchema.find();
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  // async getTicketById(id) {
  //   return BookingSchema.findById(id);
  // }
  // async updateTicket(id, ticket) {
  //   return TicketSchema.findByIdAndUpdate(id, ticket, { new: true });
  // }
  // async deleteTicket(id) {
  //   return TicketSchema.findByIdAndDelete(id);
  // }
}
module.exports = new BookingService();
