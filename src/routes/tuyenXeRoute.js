const express = require('express');
const router = express.Router();
const tuyenXeController = require('../controllers/tuyenXeController');
const { authenticateToken, authorizeRoles } = require('../middlewares/jwt');
router.get(
  '/',
  authenticateToken,
  authorizeRoles('admin'),
  tuyenXeController.getListTuyenXes,
);
router.post('/create', tuyenXeController.postTuyenXes);
router.put('/:id', tuyenXeController.putTuyenXe);
router.delete('/:id', tuyenXeController.deleteTuyenXe);
module.exports = router;