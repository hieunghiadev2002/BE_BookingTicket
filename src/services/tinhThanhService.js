const tinhThanhSchema = require('../models/TinhThanh');
class tinhThanhService {
  constructor(){
    this.tinhThanhSchema = tinhThanhSchema;
  }
  async getAllTinhThanhService(){
    try {
      const tinhThanh = await this.tinhThanhSchema.find();
      return tinhThanh;
    } catch (error) {
      return error;
    }
  }
}
module.exports = new tinhThanhService();