const HttpStatusCodes = require('../common/httpStatusCodes');
const TicketService = require('../services/ticketService');
class TicketController {
  async getTickets(req, res) {
    try {
      const tickets = await TicketService.getAllTickets();
      console.log(tickets);
      return res.status(HttpStatusCodes.OK).json({
        status: true,
        data: tickets,
      });
    } catch (error) {
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
        status: false,
        message: 'An error occurred',
        error: error.message,
      });
    }
  }
  async getTicket(req, res) {
    res.send('Get a ticket');
  }
  async createTicket(req, res) {
    res.send('Create a ticket');
  }
  async updateTicket(req, res) {
    res.send('Update a ticket');
  }
  async deleteTicket(req, res) {
    res.send('Delete a ticket');
  }
}
module.exports = new TicketController();
