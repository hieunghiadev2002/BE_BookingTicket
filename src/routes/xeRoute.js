const express = require('express');
const xeController = require('../controllers/xeController');
const router = express.Router();
const { checkDuplicateVehicleType } = require('../middlewares/checkDuplicates');
router.get('/', xeController.getAllXe);
router.post('/create', checkDuplicateVehicleType, xeController.createXe);

router.get('/:id', xeController.getXeById);
router.put('/:id', xeController.updateXe);
router.delete('/:id', xeController.removeXe);

module.exports = router;
