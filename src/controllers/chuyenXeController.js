const ChuyenXe = require("../models/ChuyenXe");
const { danhSachChuyenXeService } = require("../services/chuyenXeService");

//show danh sach chuyen xe 
const danhSachChuyenXe = async (req, res) => {
  try {
    const danhSachChuyenXe = await danhSachChuyenXeService();
    if(!danhSachChuyenXe)
    {
      return res.status(400).json({
        status: "false",
        message: "Get all vehicle failed",
        data: null
      })
    }
    return res.status(200).json({
      status: "true",
      message: "Lấy danh sách chuyến xe thành công",
      data: danhSachChuyenXe
    });
  } catch (error) {
    return res.status(500).json({
      status: "false",
      message: error.message,
    })
  }
}
//tạo mới chuyến xe 
const taoChuyenXe = async (req, res) => {
  const newChuyenXe = new ChuyenXe(req.body);
}
const capNhatChuyenXe = async (req, res) => {

}
const getChuyenXeById = async (req, res) => {

}
const xoaChuyenXe = async (req, res)  => {

}
module.exports = {danhSachChuyenXe, taoChuyenXe, capNhatChuyenXe, getChuyenXeById, xoaChuyenXe};  