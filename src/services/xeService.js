const Xe = require("../models/Xe");

const getAllXeSerivce = async () => {
  try
  {
    return await Xe.find(); 
  }catch(error)
  {
    throw new Error('Error fetching vehicles', error);
  }
}
const createXeService = async (xe) => {
  try {
    return await Xe.create(xe);
  } catch (error) {
    throw new Error('Error creating vehicle', error);
  }
}
const getXeBydId = async (id) => {
  try {
    return await Xe.findById(id);
  } catch (error) {
    throw new Error('Error fetching vehicle by id', error);
  }
}
const xoaChuyenXeService = async (req, res) =>{
  try {
    const {id} = req.params; 
    if(!id)
    {
      return res.status(400).json({
        status: "false",
        message: "Id is required",
      })
    }
    const xe = await Xe.findByIdAndDelete(id);
    if(!xe)
    {
      return res.status(400).json({
        status: "false",
        message: "Delete vehicle failed"
      })
    }
    return res.status(200).json({
      status: "true",
      message: "Delete vehicle successfully",
      data: xe
    })
  } catch (error) {
    return res.status(500).json({
      status: "false",
      message: error.message
  })
}}
module.exports = {getAllXeSerivce,  getXeBydId, createXeService, xoaChuyenXeService };