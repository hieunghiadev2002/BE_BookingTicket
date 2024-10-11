const Xe = require("../models/Xe");


const getAllXe = async (req, res)=> {
  try {
    const getAllXe= await Xe.find();
    if(!getAllXe)
    {
      return res.status(400).json({
        status: "false",
        message: "Get all vehicle failed",
        data: null
      })
    }
    return res.status(200).json({
      status: "true",
      message: "Get all vehicle",
      data: getAllXe
    });
  } catch (error) {
    
  }
}
const getIncludeLoaiXe = async (req, res)=> {
  try {
    const getAllXe= await Xe.find().populate("loaiXe");
    if(!getAllXe)
    {
      return res.status(400).json({
        status: "false",
        message: "Get all vehicle failed",
        data: null
      })
    }
    return res.status(200).json({
      status: "true",
      message: "Get all vehicle",
      data: getAllXe
    });
  } catch (error) {
    
  }
}
const createXe = async (req, res)=> {
  const xe = new Xe({
    tenXe: req.body.tenXe, 
    bienSoXe: req.body.bienSoXe,
    nhaSanXuat: req.body.nhaSanXuat,
    colorXe: req.body.colorXe,
    loaiXe: req.body.loaiXe,
    sucChua: req.body.sucChua
  })
  try {
    const newXe = await xe.save();
    if(!newXe)
    {
      return res.status(400).json({
        status: "false",
        message: "Create vehicle failed",
        data: null
      })
    }
    return res.status(200).json({
      status: "true",
      message: "Create vehicle",
      data: newXe
    })
  } catch (error) {
    return res.status(500).json({
      status: "false",
      message: "Create vehicle failed",
      data: null
    })
  }
}

module.exports = {getAllXe, createXe, getIncludeLoaiXe};