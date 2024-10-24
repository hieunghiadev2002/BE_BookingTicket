const LoaiXe = require("../models/LoaiXe");
const {
  getAllLoaiXeService,
  createLoaiXeService,
  deleteVehicleTypeService,
} = require("../services/loaiXeService");

const getAllVehicleTypes = async (req, res) => {
  const result = await getAllLoaiXeService();
  return res.status(200).json({
    status: "true",
    message: "Lay loai xe thanh cong",
    data: result,
  });
};
//Create a new vehicle type
const createVehicleType = async (req, res) => {
  const { tenLoaiXe, soGhe } = req.body;
  const existLoaiXe = await LoaiXe.findOne({ tenLoaiXe });
  if(existLoaiXe)
  {
    return res.status(400).json({
      status: "false",
      message: "Vehicle type already exists",
    });
  }
  const result = await createLoaiXeService(tenLoaiXe, soGhe);
  if (!result) {
    return res.status(400).json({
      status: "false",
      message: "Create vehicle type failed",
      data: null,
    });
  }
  return res.status(200).json({
    status: "true",
    message: "Create vehicle type",
    data: result,
  });
};
const getVehicleTypeById = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await getVehicleTypeById(id);
    if(!result)
    {
      return res.status(200).json({
        message: "Vehicle type not found",
        data: null,
      })
    }
    return res.status(200).json({
      status: "true",
      message: "Get vehicle type by id",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "false",
      message: "Get vehicle type by id failed",
      data: null,
    });
  }
};
const deleteVehicleTypeId = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVehicleType = await deleteVehicleTypeService(id);
    if (!deletedVehicleType) {
      return res.status(400).json({
        status: "false",
        message: "Delete vehicle type failed",
        data: null,
      });
    }
    return res.status(200).json({
      status: "true",
      message: "Delete vehicle type",
      data: deletedVehicleType,
    });
  } catch (error) {
    return res.status(500).json({
      status: "false",
      message: "Delete vehicle type failed",
      data: null,
    });
  }
};

module.exports = {
  getAllVehicleTypes,
  createVehicleType,
  getVehicleTypeById,
  deleteVehicleTypeId,
};
