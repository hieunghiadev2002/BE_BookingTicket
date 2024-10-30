const TicketSchema = require('../models/Ticket');
const ChiTietGheSchema = require('../models/ChiTietGhe');
class ticketService {
  async getAllTickets() {
    try {
      return TicketSchema.find();
    } catch (error) {
      throw error;
    }
  }
  async getTicketById(id) {
    return TicketSchema.findById(id);
  }
  async createTicket(ticket) {
    const { danhSachGhe, chuyenXe } = ticket;
    const chiTietGhe = await ChiTietGheSchema.findOne({
      danhSachGhe,
      chuyenXe,
    });
    for (const viTriGhe of danhSachGhe) {
      const chiTietGhe = await ChiTietGheSchema.findOne({ viTriGhe, chuyenXe });
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
      chiTietGhe.trangThai = 'Đã Đặt';
      await chiTietGhe.save();
    }

    return TicketSchema.create(ticket);
  }
  async updateTicket(id, ticket) {
    return TicketSchema.findByIdAndUpdate(id, ticket, { new: true });
  }
  async deleteTicket(id) {
    return TicketSchema.findByIdAndDelete(id);
  }
  async getTicketsByUser(userID) {
    try {
      const ticket = TicketSchema.find({ user: userID });
      if (!ticket) {
        throw new Error('Ticket not found');
      }
      return ticket;
    } catch (error) {
      throw new Error('Error fetching tickets by user', error.message);
    }
  }
}
module.exports = new ticketService();
