const tinhThanhService = require('../services/tinhThanhService'); // Ensure this is the correct path

class TinhThanhController {
  async getTinhThanh(req, res) {
    try {
      const listTinhThanh = await tinhThanhService.getAllTinhThanhService();
      return res.status(200).json({
        status: true,
        data: listTinhThanh,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: false,
        message: 'An error occurred',
        error: error.message,
      });
    }
  }
}

module.exports = new TinhThanhController();
