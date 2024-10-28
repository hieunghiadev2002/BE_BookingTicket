const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.get('/', ticketController.getTickets);
router.get('/:id', (req, res) => {
  res.send('Get a ticket');
});
router.post('/', (req, res) => {
  res.send('Create a ticket');
});
router.put('/:id', (req, res) => {
  res.send('Update a ticket');
});
router.delete('/:id', (req, res) => {
  res.send('Delete a ticket');
});
module.exports = router;
