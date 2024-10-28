const HttpStatusCodes = require('../common/httpStatusCodes');
const seatService = require('../services/seatService');
const bookingService = require('../services/bookingService');

class bookingTicketController {
  //con loi chua fix xong
  async bookingTicket(req, res) {
    try {
      const userId = req.user.user.id;
      const { chuyenXeId, danhSachGhe, paymentDetails } = req.body;
      // if (!userId || !chuyenXeId || !danhSachGhe || !paymentDetails) {
      //   return res.status(HttpStatusCodes.BAD_REQUEST).json({
      //     status: false,
      //     message: 'Missing required fields',
      //   });
      // }
      // const isSeatAvailable = await seatService.checkSeatAvailability({
      //   chuyenXeId,
      //   danhSachGhe,
      // });
      // if (!isSeatAvailable) {
      //   return res.status(HttpStatusCodes.BAD_REQUEST).json({
      //     status: false,
      //     message: 'One or more seats are not available',
      //   });
      // }
      const booking = await bookingService.createBooking({
        chuyenXe: chuyenXeId,
        danhSachGhe,
        user: userId,
      });
      // const paymentResult = await bookingService.processPayment(paymentDetails);
      // if (!paymentResult.success) {
      //   return res.status(HttpStatusCodes.PAYMENT_REQUIRED).json({
      //     status: 'false',
      //     message: 'Payment failed',
      //   });
      // }
      if (!booking) {
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
          status: false,
          message: 'An error occurred',
        });
      }
      return res.status(HttpStatusCodes.OK).json({
        status: true,
        message: 'Booking ticket successfully',
      });
    } catch (error) {
      console.error(error);
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
        status: false,
        message: 'An error occurred',
        error: error.message,
      });
    }
  }
  async getAllTickets(req, res) {
    try {
      const tickets = await bookingService.getAllTickets();
      return res.status(HttpStatusCodes.OK).json({
        status: true,
        message: 'Get all tickets successfully',
        result: tickets,
      });
    } catch (error) {
      console.error(error);
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
        status: false,
        message: 'An error occurred',
        error: error.message,
      });
    }
  }
  async removeTicket(req, res) {}
  async updateTicket(req, res) {}
}
module.exports = new bookingTicketController();
