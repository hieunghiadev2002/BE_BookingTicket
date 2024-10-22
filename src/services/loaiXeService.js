const LoaiXe = require("../models/LoaiXe");
const getAllLoaiXeService = async () => {
  try {
    return await LoaiXe.find();
  } catch (error) {
    throw new Error("Error fetching vehicle types", error);
  }
};
const createLoaiXeService = async (loaiXe) => {
  try {
    return await LoaiXe.create(loaiXe);
  } catch (error) {
    throw new Error("Error creating vehicle type", error);
  }
};
const getVehicleTypeById = async (id) => {
  try {
    return await LoaiXe.findById(id);
  } catch (error) {
    throw new Error("Error fetching vehicle type by id", error);
  }
};
const getLoaiXeByIdService = async (id) => {
  try {
    return await LoaiXe.findById(id);
  } catch (error) {
    throw new Error("Error fetching vehicle type by id", error);
  }
};
const deleteVehicleTypeService = async (id) => {
  try {
    return await LoaiXe.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error deleting vehicle type", error);
  }
};

module.exports = {
  getAllLoaiXeService,
  createLoaiXeService,
  getLoaiXeByIdService,
  deleteVehicleTypeService,
  getVehicleTypeById,
};
