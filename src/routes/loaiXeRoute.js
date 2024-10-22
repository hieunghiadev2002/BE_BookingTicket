const express = require("express");
const router = express.Router();
const { authenticateToken, authorizeRoles } = require("../middlewares/jwt");
const {
  getAllVehicleTypes,
  createVehicleType,
  deleteVehicleTypeId,
} = require("../controllers/loaiXeController");
/**
 * @swagger
 * /api/loaixe:
 *   get:
 *     summary: Retrieve a list of all vehicle types
 *     tags: [Vehicle Types]
 *     responses:
 *       200:
 *         description: A list of vehicle types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The vehicle type ID
 *                     example: 60d0fe4f5311236168a109ca
 *                   name:
 *                     type: string
 *                     description: The name of the vehicle type
 *                     example: Sedan
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllVehicleTypes);
router.post("/create", createVehicleType);
router.get("/:id");
router.put("/:id");
router.delete(
  "/remove/:id",
  authenticateToken,
  authorizeRoles("admin"),
  deleteVehicleTypeId,
);
module.exports = router;
