const Xe = require('../models/Xe');

const getAllXeSerivce = async ({ page, limit }) => {
  try {
    return await Xe.find().skip((page - 1) * limit).limit;
  } catch (error) {
    throw new Error('Error fetching vehicles', error);
  }
};
const createXeService = async (data) => {
  try {
    const newXe = await Xe.create(data);
    if (!newXe) {
      throw new Error('Error creating vehicle');
    }
    await newXe.save();
    return newXe;
  } catch (error) {
    console.error(error);
    throw new Error('Error creating vehicle', error);
  }
};
const getXeBydId = async (id) => {
  try {
    return await Xe.findById(id).populate('loaiXe');
  } catch (error) {
    throw new Error('Error fetching vehicle by id', error);
  }
};
const removeCarService = async (id) => {
  try {
    return await Xe.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
    throw new Error('Error deleting vehicle', error);
  }
};
const updateXeService = async (id, data) => {
  try {
    const xe = await Xe.findByIdAndUpdate(id, data);
    if (!xe) {
      throw new Error('Error updating vehicle');
    }
    return xe;
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};
module.exports = {
  getAllXeSerivce,
  getXeBydId,
  createXeService,
  removeCarService,
  updateXeService,
};
