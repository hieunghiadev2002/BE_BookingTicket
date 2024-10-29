const HttpStatusCodes = require('../common/httpStatusCodes');
const ticketService = require('../services/ticketService');
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
       return res.status(HttpStatusCodes.OK).json({
        status: true,
        data: tickets,
      })
    }
  }
  async getTicketById(req, res) {
    try {
      const { id } = req.params;
      const ticket = await TicketService.getTicketById(id);
      if (!ticket) {
        return res.status(400).json({
          status: 'false',
          message: 'Ticket not found',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Get Ticket',
        data: ticket,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'false',
        message: error.message,
      });
    }
  }
  
  async getTicketByUserId(req, res) {
    try {
      const userID = req.user.user.id;
      console.log("UserId: " + userID);
      const ticket = await TicketService.getTicketsByUser(userID);
      console.log("Danh Sách ticket:" +ticket)
      return res.status(HttpStatusCodes.OK).json({
        status: true,
        data: ticket,
      });
    } catch (error) {
       return res.status(HttpStatusCodes.OK).json({
        status: true,
        data: ticket,
      })
    }
  }
  
  async updateTicket(req, res) {
    try {
      const { id } = req.params;
      const { chuyenXe, trangThaiVe, tongTien, danhSachGhe } = req.body;
      const updatedTicket= await ticketService.updateTicket(id, {
        chuyenXe, 
        trangThaiVe, 
        tongTien,
        danhSachGhe
      });
      if (!updatedTicket) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          status: 'false',
          message: 'Update Ticket failed',
        });
      }
      return res.status(HttpStatusCodes.OK).json({
        status: 'true',
        message: 'Update Ticket successfully',
        result: updatedTicket,
      });
    } catch (error) {
      console.error(error);
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR);
    }

  }
  async deleteTicket(req, res) {
    try {
      const { id } = req.params;
      const deletedTicket = await ticketService.deleteTicket(id);
      if (!deletedTicket) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          status: 'false',
          message: 'Delete Ticket failed',
        });
      }
      return res.status(HttpStatusCodes.OK).json({
        status: 'true',
        message: 'Delete Ticket successfully',
        result: deletedTicket,
      });
    } catch (error) {
      console.error(error);
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}
module.exports = new TicketController();
