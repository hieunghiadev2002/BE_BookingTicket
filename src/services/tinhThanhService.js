const tinhThanhSchema = require('../models/TinhThanh');
class tinhThanhService {
  constructor() {
    this.tinhThanhSchema = tinhThanhSchema;
  }
  async getAllTinhThanhService() {
    try {
      
    

      const tinhThanh =await  tinhThanhSchema.find({});
      return tinhThanh;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
module.exports = new tinhThanhService();
