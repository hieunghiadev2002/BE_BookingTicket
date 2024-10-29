const BookingSchema = require('../models/Ticket');
const stripe = require('stripe')(process.env.SECRET_KEY_STRIPE);
class BookingService {
  constructor() {}
  async createBooking({ chuyenXe, danhSachGhe, user, tongTien, trangThaiVe }) {
    try {
      const newBooking = new BookingSchema({
        chuyenXe,
        danhSachGhe,
        user,
        tongTien,
        trangThaiVe,
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
