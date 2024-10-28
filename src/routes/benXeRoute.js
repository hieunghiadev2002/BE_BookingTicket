const express = require('express');
const router = express.Router();
const BenXeController = require('../controllers/benXeController');
router.get('/', BenXeController.getAllBenXe);
router.post('/create', BenXeController.createBenXe);
router.put('/:id', BenXeController.updateBenXe);
router.delete('/:id', BenXeController.deleteBenXe);
module.exports = router;
