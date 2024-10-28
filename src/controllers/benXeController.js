const BenXeService = require('../services/benXeSerivce');
const HttpStatusCodes = require('../common/httpStatusCodes');

class benXeController {
  async getAllBenXe(req, res) {
    try {
      let { limit, page } = req.query;
      limit = parseInt(limit) || 5;
      page = parseInt(page) || 1;
      console.log(limit, page);
      const listBenXe = await BenXeService.getAllBenXes({ limit, page });
      return res.status(HttpStatusCodes.OK).json({
        status: 'true',
        message: 'Get all ben xe successfully',
        result: listBenXe,
        limit: limit,
        page: page,
      });
    } catch (error) {
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
        status: 'false',
        message: error.message,
      });
    }
  }
  async createBenXe(req, res) {
    try {
      const { tenBenXe, diaChi, tinhThanh } = req.body;
      console.log(req.body);
      const newBenXe = await BenXeService.createBenXe({
        tenBenXe,
        diaChi,
        tinhThanh,
      });
      if (!newBenXe) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          status: 'false',
          message: 'Create ben xe failed',
        });
      }
      return res.status(HttpStatusCodes.CREATED).json({
        status: 'true',
        message: 'Create ben xe successfully',
        result: newBenXe,
      });
    } catch (error) {
      console.error(error);
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
        status: 'false',
        message: error.message,
      });
    }
  }
  async updateBenXe(req, res) {
    try {
      const { id } = req.params;
      const { tenBenXe, diaChi, tinhThanh } = req.body;
      const updatedBenXe = await BenXeService.updateBenXe(id, {
        tenBenXe,
        diaChi,
        tinhThanh,
      });
      if (!updatedBenXe) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          status: 'false',
          message: 'Update ben xe failed',
        });
      }
      return res.status(HttpStatusCodes.OK).json({
        status: 'true',
        message: 'Update ben xe successfully',
        result: updatedBenXe,
      });
    } catch (error) {
      console.error(error);
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
  async deleteBenXe(req, res) {
    try {
      const { id } = req.params;
      const deletedBenXe = await BenXeService.deleteBenXe(id);
      if (!deletedBenXe) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          status: 'false',
          message: 'Delete ben xe failed',
        });
      }
      return res.status(HttpStatusCodes.OK).json({
        status: 'true',
        message: 'Delete ben xe successfully',
        result: deletedBenXe,
      });
    } catch (error) {
      console.error(error);
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}
module.exports = new benXeController();
