const chuyenXeService = require('../services/chuyenXeService');
class chuyenXeController {
  async getChuyenXes(req, res) {
    try {
      //get list
      const listChuyenXes = await chuyenXeService.getListChuyenXe();
      if (!listChuyenXes) {
        return res.status(400).json({
          status: 'false',
          message: 'Get all routes failed',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Get all routes',
        data: listChuyenXes,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'false',
        message: 'Internal Server Error',
      });
    }
  }
  async postChuyenXe(req, res) {
    try {
      const { ngayDi, ngayDen, giaChuyenXe, soChoTrong, tuyenXe, xe } =
        req.body;
      const newChuyenXe = await chuyenXeService.postChuyenXe({
        ngayDi,
        ngayDen,
        giaChuyenXe,
        soChoTrong,
        tuyenXe,
        xe,
      });
      if (!newChuyenXe) {
        return res.status(400).json({
          status: 'false',
          message: 'Create route failed',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Create route',
        data: newChuyenXe,
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
module.exports = new chuyenXeController();
