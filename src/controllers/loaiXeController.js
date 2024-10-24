const { ObjectId } = require('bson');
const LoaiXe = require('../models/LoaiXe');
const {
  getVehicleTypesSerivce,
  PostVehicleTypeService,
  deleteVehicleTypeService,
} = require('../services/loaiXeService');

const getAllVehicleTypes = async (req, res) => {
  try {
    let { limit, page } = req.query;
    limit = parseInt(limit) || 5;
    page = parseInt(page) || 1;
    const listVehicleType = await getVehicleTypesSerivce({ limit, page });
    if (!listVehicleType) {
      return res.status(400).json({
        status: 'false',
        message: 'Get all car types failed',
      });
    }
    return res.status(200).json({
      status: 'true',
      message: 'Get all car types sucessfully',
      data: listVehicleType,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'false',
      message: error.message,
    });
  }
};
//Create a new vehicle type
const createVehicleType = async (req, res) => {
  try {
    const { tenLoaiXe, soGhe } = req.body;
    const listVehicleType = await PostVehicleTypeService({ tenLoaiXe, soGhe });
    if (!listVehicleType) {
      return res.status(400).json({
        status: 'false',
        message: 'Create vehicle type failed',
      });
    }
    return res.status(200).json({
      status: 'true',
      message: 'Create vehicle type successfully',
      result: listVehicleType,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'false',
      message: error.message,
    });
  }
};
const getVehicleTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    if (ObjectId.isValid(id) === false) {
      return res.status(400).json({
        status: 'false',
        message: 'Invalid vehicle type id',
        data: null,
      });
    }
    const result = await getVehicleTypeById(id);
    if (!result) {
      return res.status(200).json({
        message: 'Vehicle type not found',
        data: null,
      });
    }
    return res.status(200).json({
      status: 'true',
      message: 'Get vehicle type by id',
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'false',
      message: 'Get vehicle type by id failed',
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
        status: 'false',
        message: 'Delete vehicle type failed',
        data: null,
      });
    }
    return res.status(200).json({
      status: 'true',
      message: 'Delete vehicle type',
      data: deletedVehicleType,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'false',
      message: 'Delete vehicle type failed',
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
