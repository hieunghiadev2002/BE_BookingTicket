const express = require('express');
const chuyenXeController = require('../controllers/chuyenXeController');
const router = express.Router();
router.get('/', chuyenXeController.getChuyenXes);
router.post('/create', chuyenXeController.postChuyenXe);
module.exports = router;
