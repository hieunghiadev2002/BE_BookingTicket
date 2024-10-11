const express = require('express');
const { getAllXe, createXe, getIncludeLoaiXe } = require('../controllers/xeController');
const router = express.Router();
/**
 * @swagger
 * /api/xe:
 *   get:
 *     summary: Lấy danh sách tất cả các xe
 *     tags: [Xe]
 *     responses:
 *       200:
 *         description: Trả về danh sách xe
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Xe'
 */
router.get('/', getAllXe);
/**
 * @swagger
 * /api/xe/create:
 *   post:
 *     summary: Create a new vehicle
 *     tags: [Vehicles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the vehicle
 *                 example: Toyota Camry
 *               type:
 *                 type: string
 *                 description: The type of the vehicle
 *                 example: Sedan
 *               licensePlate:
 *                 type: string
 *                 description: The license plate of the vehicle
 *                 example: ABC-1234
 *     responses:
 *       201:
 *         description: Vehicle created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The vehicle ID
 *                   example: 60d0fe4f5311236168a109ca
 *                 name:
 *                   type: string
 *                   description: The name of the vehicle
 *                   example: Toyota Camry
 *                 type:
 *                   type: string
 *                   description: The type of the vehicle
 *                   example: Sedan
 *                 licensePlate:
 *                   type: string
 *                   description: The license plate of the vehicle
 *                   example: ABC-1234
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.post('/create', createXe)
router.get('/getIncludeLoaiXe', getIncludeLoaiXe)
module.exports = router;