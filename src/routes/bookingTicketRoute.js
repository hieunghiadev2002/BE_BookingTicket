const express = require('express');
const router = express.Router();
const bookingTicketController = require('../controllers/bookingController');
router.get('/', bookingTicketController.getAllTickets);
router.post('/', bookingTicketController.bookingTicket);
router.put('/:id', bookingTicketController.updateTicket);
router.delete('/:id', bookingTicketController.updateTicket);
module.exports = router;
