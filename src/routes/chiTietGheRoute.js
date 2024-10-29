const express = require('express');
const router = express.Router();
const chiTietGheController = require('../controllers/chiTietGheController');
router.get('/:id', chiTietGheController.getChiTietGheByChuyenXeId);
module.exports = router;
