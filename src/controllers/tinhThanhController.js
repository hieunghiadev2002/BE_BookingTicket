const tinhThanhService = require('../services/tinhThanhService'); // Ensure this is the correct path

class TinhThanhController {
  async getTinhThanh(req, res) {
    try {
      let { limit, page, search } = req.query;
      limit = parseInt(limit) || 5;
      page = parseInt(page) || 1;
      const listTinhThanh = await tinhThanhService.getAllTinhThanhService({
        limit,
        page,
        search,
      });
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
