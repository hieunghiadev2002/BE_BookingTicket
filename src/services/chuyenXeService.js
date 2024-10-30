const ChuyenXeSchema = require('../models/ChuyenXe');
const LoaiXe = require('../models/LoaiXe');
class chuyenXeService {
  constructor() {
    this.chuyenXeSchema = ChuyenXeSchema;
  }
  async getListChuyenXe() {
    try {
      const listChuyenXes = await this.chuyenXeSchema
        .find()
        .populate('tuyenXe')
        .populate({
          path: 'xe',
          populate: {
            path: 'loaiXe',
            model: 'LoaiXe',
          },
        })
        .exec();
      return listChuyenXes;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching routes', error);
    }
  }
  async findChuyenXe({ ngayDi, ngayDen, giaChuyenXe, tuyenXe, xe }) {
    const chuyenXe = await this.chuyenXeSchema.findOne({
      ngayDi,
      ngayDen,
      giaChuyenXe,
      tuyenXe,
      xe,
    });
    return chuyenXe;
  }
  async postChuyenXe(data) {
    try {
      const newChuyenXe = await this.chuyenXeSchema.create(data);
      if (!newChuyenXe) {
        throw new Error('Error creating route');
      }
      await newChuyenXe.save();
      return newChuyenXe;
    } catch (error) {
      throw new Error('Error creating route', error);
    }
  }
  async putChuyenXe(id, data) {}
  async deleteChuyenXe(id) {}
  async getChuyenXeByTuyenXeId({tuyenXeId, ngayDi}) {
    try {
      const inputDate = new Date(ngayDi);
      
      const chuyenXeTheoTuyen = await this.chuyenXeSchema
        .find({
          tuyenXe: tuyenXeId,
          $expr: {
            $eq: [
              { $dateToString: { format: "%Y-%m-%d", date: "$ngayDi" } },
              { $dateToString: { format: "%Y-%m-%d", date: inputDate } }
            ]
          }
        })
        .populate('tuyenXe')
        .populate('xe');

      return chuyenXeTheoTuyen;
      
    } catch (error) {
      console.error('Error fetching routes:', error);
      throw new Error('Error fetching routes');
    }
}
}

module.exports = new chuyenXeService();
