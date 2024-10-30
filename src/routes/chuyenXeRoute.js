const express = require('express');
const chuyenXeController = require('../controllers/chuyenXeController');
const router = express.Router();
router.get('/', chuyenXeController.getChuyenXes);
router.put('/:id', chuyenXeController.updateChuyenXe);
router.post('/create', chuyenXeController.postChuyenXe);
router.delete('/:id', chuyenXeController.deleteChuyenXe);
//get chuyen xe theo tuyen xe
router.get('/tuyenXe', chuyenXeController.getChuyenXeByTuyenXeId);
module.exports = router;
