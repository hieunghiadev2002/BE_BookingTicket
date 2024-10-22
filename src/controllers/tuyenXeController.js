class tuyenXeController {

  constructor() {}
  async getAllTuyenXe(req, res) {
    return res.status(200).json({
      status: "true",
      message: "Get all routes",
      data: [],
    });
  }
  async createAllTuyenXe(req, res) {
    return res.status(200).json({
      status: "true",
      message: "Create route",
      data: [],
    });
  }
}
module.exports = new tuyenXeController();
