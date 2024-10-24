const express = require("express");
const xeController = require("../controllers/xeController");
const router = express.Router();

router.get("/", xeController.getAllXe);
router.post("/create", xeController.createXe);
router.get("/get-xe-loai-xe", xeController.getIncludeLoaiXe);
router.get("/:id", xeController.getXeById);
router.put("/:id", xeController.updateXe);
router.delete("/:id", xeController.removeXe);

module.exports = router;
