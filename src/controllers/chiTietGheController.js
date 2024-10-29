const chiTietGheService = require('../services/chiTietGheService');
class chiTietGheController {
  async getChiTietGheByChuyenXeId(req, res) {
    try {
      const { id } = req.params;
      const chiTietGhe = await chiTietGheService.getChiTietGheByChuyenXeId(id);
      if (!chiTietGhe) {
        return res.status(400).json({
          status: 'false',
          message: 'Get seat failed',
        });
      }
      return res.status(200).json({
        status: 'true',
        message: 'Get seat',
        data: chiTietGhe,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'false',
        message: error.message,
      });
    }
  }
}
module.exports = new chiTietGheController();
