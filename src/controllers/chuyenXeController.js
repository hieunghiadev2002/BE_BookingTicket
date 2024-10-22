const ChuyenXe = require("../models/ChuyenXe");
const { danhSachChuyenXeService } = require("../services/chuyenXeService");

const danhSachChuyenXe = async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'asc' } = req.query;
      const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      sortBy,
      sortOrder: sortOrder === 'asc' ? 1 : -1,
    };
    const danhSachChuyenXe = await danhSachChuyenXeService(options);
    if (!danhSachChuyenXe) {
      return res.status(400).json({
        status: "false",
        message: "Get all vehicle failed",
      });
    }
    return res.status(200).json({
      status: "true",
      message: "Lấy danh sách chuyến xe thành công",
      data: danhSachChuyenXe,
    });
  } catch (error) {
    return res.status(500).json({
      status: "false",
      message: error.message,
    });
  }
};
//tạo mới chuyến xe
const taoChuyenXe = async (req, res) => {
  const newChuyenXe = new ChuyenXe(req.body);
};
const capNhatChuyenXe = async (req, res) => {};
const getChuyenXeById = async (req, res) => {};
const xoaChuyenXe = async (req, res) => {};
module.exports = {
  danhSachChuyenXe,
  taoChuyenXe,
  capNhatChuyenXe,
  getChuyenXeById,
  xoaChuyenXe,
};
