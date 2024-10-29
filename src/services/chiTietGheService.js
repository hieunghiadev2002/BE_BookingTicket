const ChiTietGheSchema = require('../models/ChiTietGhe');

class ChiTietGheService {
  constructor() {}
  async createChiTietGhe({ vitriGhe, chuyenXe, trangThai }) {
    try {
      const newChiTietGhe = new ChiTietGheSchema({
        viTriGhe: vitriGhe,
        chuyenXe: chuyenXe,
        trangThai: trangThai,
      });
      await newChiTietGhe.save();
      console.log('Đã thêm chi tiết ghế thành công');
      return newChiTietGhe;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
  async getChiTietGheByChuyenXeId(id) {
    try {
      const getList = await ChiTietGheSchema.find({
        chuyenXe: id,
      }).populate('chuyenXe');
      if (!getList) {
        throw new Error('Get seat failed');
      }
      console.log(getList);
      return getList;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
module.exports = new ChiTietGheService();
