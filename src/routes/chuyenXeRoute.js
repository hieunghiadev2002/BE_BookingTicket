const express = require('express');
const { danhSachChuyenXe } = require('../controllers/chuyenXeController');
const router = express.Router();
router.get('/danh-sach-chuyen-xe', danhSachChuyenXe);
module.exports = router;