const BookingSchema = require('../models/Ticket');
const stripe = require('stripe')(process.env.SECRET_KEY_STRIPE);
class BookingService {
  constructor() {}
  async createBooking({ chuyenXe, danhSachGhe, user }) {
    try {
      const newBooking = new BookingSchema({
        chuyenXe,
        danhSachGhe,
        user,
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
}
module.exports = new BookingService();
