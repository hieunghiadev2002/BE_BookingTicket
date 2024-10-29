const express = require('express');
const router = express.Router();
const bookingTicketController = require('../controllers/bookingController');
router.get('/', bookingTicketController.getAllTickets);
// router.get('/:id', bookingTicketController.get)
router.post('/create', bookingTicketController.bookingTicket);
// router.put('/:id', bookingTicketController.updateTicket);
// router.delete('/:id', bookingTicketController.removeTicket);
module.exports = router;
