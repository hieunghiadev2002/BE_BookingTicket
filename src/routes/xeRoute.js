const express = require("express");
const xeController = require("../controllers/xeController");
const router = express.Router();

router.get("/", xeController.getAllXe);
router.post("/create", xeController.createXe);
router.get("/getIncludeLoaiXe", xeController.getIncludeLoaiXe);
module.exports = router;
