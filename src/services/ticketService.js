const TicketSchema = require('../models/Ticket');
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
      return TicketSchema.find({user: mongoose.Types.ObjectId(userID)});
    } catch (error) {
      throw new Error('Error fetching tickets by user', error);
    }
  }
}
module.exports = new ticketService();
