const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.get('/', ticketController.getTickets);
router.get('/:id', ticketController.getTicketById);
router.get('/user/:userID', ticketController.getTicketByUserId);
router.put('/:id', ticketController.updateTicket);
router.delete('/:id', ticketController.deleteTicket);
module.exports = router;
