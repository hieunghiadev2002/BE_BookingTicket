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
}
module.exports = new ticketService();
