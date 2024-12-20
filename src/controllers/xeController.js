const Xe = require('../models/Xe');
const xeService = require('../services/xeService');
class xeController {
  async getAllXe(req, res) {
    try {
      const getAllXe = await xeService.getAllXeSerivce();
      return res.status(200).json({
        status: 'true',
        message: 'Lấy danh sách xe thành công',
        data: getAllXe,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'false',
        message: 'Internal Server Error',
      });
    }
  }
  async getIncludeLoaiXe(req, res) {
    try {
      const getAllXe = await Xe.find().populate('loaiXe');
      if (!getAllXe) {
        return res.status(400).json({
          status: 'false',
          message: 'Lấy danh sách xe thất bại',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Lấy danh sách xe thành công',
        result: getAllXe,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'false',
        message: error.message,
      });
    }
  }
  async createXe(req, res) {
    try {
      const { tenXe, bienSoXe, nhaSanXuat, colorXe, loaiXe, sucChua } =
        req.body;
      const newXe = await xeService.createXeService({
        tenXe,
        bienSoXe,
        nhaSanXuat,
        colorXe,
        loaiXe,
        sucChua,
      });
      if (!newXe) {
        return res.status(400).json({
          status: 'false',
          message: 'Create vehicle failed',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Create vehicle',
        data: newXe,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'false',
        message: 'Internal Server Error',
      });
    }
  }
  async getXeById(req, res) {
    try {
      const { id } = req.params;
      const xe = await xeService.getXeById(id);
      if (!xe) {
        return res.status(400).json({
          status: 'false',
          message: 'Vehicle not found',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Get vehicle',
        data: xe,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'false',
        message: error.message,
      });
    }
  }
  async removeXe(req, res) {
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({
          status: 'false',
          message: 'Id không hợp lệ',
        });
      }
      const xe = await xeService.removeCarService(id);
      if (!xe) {
        return res.status(400).json({
          status: 'false',
          message: 'Xe không tồn tại',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Xóa xe thành công',
        data: xe,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'false',
        message: 'Internal Server Error',
      });
    }
  }
  async updateXe(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const xe = await xeService.updateXeService(id, data);
      if (!xe) {
        return res.status(400).json({
          status: 'false',
          message: 'Update vehicle failed',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Update car successfully',
        data: xe,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'false',
        message: error.message,
      });
    }
  }
}

module.exports = new xeController();
