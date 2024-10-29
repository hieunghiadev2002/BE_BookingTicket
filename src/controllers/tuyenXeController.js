const HttpStatusCodes = require('../common/httpStatusCodes');
const tuyenXeService = require('../services/tuyenXeService');
class tuyenXeController {
  async getListTuyenXes(req, res) {
    try {
      const listTuyenXe = await tuyenXeService.getTuyenXes();
      return res.status(200).json({
        status: 'true',
        message: 'Get all routes',
        result: listTuyenXe,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'false',
        message: 'Internal Server Error',
      });
    }
  }

  async getTuyenXeByDiemDiDiemDen(req, res) {
    try {
      const { diemDi, diemDen } = req.body;
      if (!diemDi || !diemDen) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          status: 'false',
          message: 'Thiếu thông tin',
        });
      }
      const tuyenXe = await tuyenXeService.timTuyenXes({ diemDi, diemDen });

      if (!tuyenXe || tuyenXe.length === 0) {
        return res.status(HttpStatusCodes.NOT_FOUND).json({
          status: 'false',
          message: 'Không tìm thấy tuyến xe',
        });
      }
      return res.status(HttpStatusCodes.OK).json({
        status: 'true',
        data: tuyenXe,
      });
    } catch (error) {
      console.error(error);
      return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
        status: 'false',
        message: 'Lỗi máy chủ nội bộ',
      });
    }
  }

  async postTuyenXes(req, res) {
    try {
      const { tenTuyenXe, diemDi, diemDen, timeDiChuyen, khoangCach, benXe } =
        req.body;
      const newTuyenXe = await tuyenXeService.postTuyenXe({
        tenTuyenXe,
        diemDi,
        diemDen,
        timeDiChuyen,
        khoangCach,
        benXe,
      });
      if (!newTuyenXe) {
        return res.status(400).json({
          status: 'false',
          message: 'Create route failed',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Create route',
        data: newTuyenXe,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'false',
        message: 'Internal Server Error',
      });
    }
  }
  async putTuyenXe(req, res) {
    try {
      const { id } = req.params;
      const { tenTuyenXe, diemDi, diemDen, timeDiChuyen, khoangCach, benXe } =
        req.body;
      const updateTuyenXe = await tuyenXeService.putTuyenXe(id, {
        tenTuyenXe,
        diemDi,
        diemDen,
        timeDiChuyen,
        khoangCach,
        benXe,
      });
      if (!updateTuyenXe) {
        return res.status(400).json({
          status: 'false',
          message: 'Update route failed',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Update route',
        data: updateTuyenXe,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'false',
        message: 'Internal Server Error',
      });
    }
  }
  async deleteTuyenXe(req, res) {
    try {
      const { id } = req.params;
      const deleteTuyenXe = await tuyenXeService.deleteTuyenXe(id);
      if (!deleteTuyenXe) {
        return res.status(400).json({
          status: 'false',
          message: 'Delete route failed',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Delete route',
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'false',
        message: 'Internal Server Error',
      });
    }
  }
}
module.exports = new tuyenXeController();
