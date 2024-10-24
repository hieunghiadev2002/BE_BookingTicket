const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middlewares/jwt');
const { checkDuplicateVehicleType } = require('../middlewares/checkDuplicates');
const {
  getAllVehicleTypes,
  createVehicleType,
  deleteVehicleTypeId,
} = require('../controllers/loaiXeController');

router.get('/', getAllVehicleTypes);
router.post('/create', checkDuplicateVehicleType, createVehicleType);
router.get('/:id');
router.put('/:id');
router.delete(
  '/remove/:id',
  authenticateToken,
  authorizeRoles('admin'),
  deleteVehicleTypeId,
);
module.exports = router;
