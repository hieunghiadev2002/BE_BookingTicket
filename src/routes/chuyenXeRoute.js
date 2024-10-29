const express = require('express');
const chuyenXeController = require('../controllers/chuyenXeController');
const router = express.Router();
router.get('/', chuyenXeController.getChuyenXes);
router.post('/create', chuyenXeController.postChuyenXe);
//get chuyen xe theo tuyen xe
router.get('/tuyenXe', chuyenXeController.getChuyenXeByTuyenXeId);
module.exports = router;
