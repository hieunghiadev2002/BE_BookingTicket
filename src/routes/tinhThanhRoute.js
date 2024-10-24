const express = require('express');
const router = express.Router();
const tinhThanhController = require('../controllers/tinhThanhController');
router.get('/', tinhThanhController.getTinhThanh);
module.exports = router;
