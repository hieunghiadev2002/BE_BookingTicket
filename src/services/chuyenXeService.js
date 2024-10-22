const ChuyenXe = require("../models/ChuyenXe");

const danhSachChuyenXeService = async ({page, limit, sortBy, sortOrder}) => {
  try {
    const skip = (page - 1) * limit;
    const danhSachChuyenXe = await ChuyenXe.find().sort({[sortBy]: sortOrder}).skip(skip).limit(limit);
    const total = await ChuyenXe.countDocuments();
    return {
      danhSachChuyenXe,
      total,
      page, 
      pages: Math.ceil(total / limit)
    }
  } catch (error) {
    throw new Error("Get all vehicle failed");
  }
};
const createChuyenXeService = async (chuyenXe) => {
  try {
    return await ChuyenXe.create(chuyenXe);
  } catch (error) {
    throw new Error("Create vehicle failed");
  }
};
const getChuyenXeById = async (id) => {
  try {
    return await ChuyenXe.findById(id);
  } catch (error) {
    throw new Error("Get vehicle by id failed");
  }
};
const updateChuyenXeService = async (id, chuyenXeData) => {
  try {
    const chuyenXe = await ChuyenXe.findById(id);
    if (!chuyenXe) {
      throw new Error("Vehicle not found");
    }
    return await chuyenXe.updateOne(chuyenXeData);
  } catch (error) {
    throw new Error("Error when update vehicle");
  }
};
const deleteChuyenXeService = async (id) => {};
module.exports = {
  danhSachChuyenXeService,
  createChuyenXeService,
  getChuyenXeById,
  updateChuyenXeService,
};
