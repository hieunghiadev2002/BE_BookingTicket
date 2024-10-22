const {
  getAllLoaiXeService,
  createLoaiXeService,
  deleteVehicleTypeService,
} = require("../services/loaiXeService");

const getAllVehicleTypes = async (req, res) => {
  const result = await getAllLoaiXeService();
  return res.status(200).json({
    status: "true",
    message: "Get all vehicle types",
    data: result,
  });
};
const createVehicleType = async (req, res) => {
  const { tenLoaiXe, soGhe } = req.body;
  const result = await createLoaiXeService({ tenLoaiXe, soGhe });
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
