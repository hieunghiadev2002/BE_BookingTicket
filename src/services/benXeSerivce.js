const benXeSchema = require('../models/BenXe');
class benXeService {
  constructor() {}
  async getAllBenXes({ limit, query }) {
    try {
      const skip = limit * (query - 1);
      const listBenXes = await benXeSchema
        .find({})
        .limit(limit)
        .skip(skip)
        .populate('tinhThanh');
      if (!listBenXes) {
        throw new Error('Error');
      }
      return listBenXes;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async createBenXe({ tenBenXe, diaChi, tinhThanh }) {
    try {
      const newBenXe = new benXeSchema({
        tenBenXe,
        diaChi,
        tinhThanh,
      });
      await newBenXe.save();
      return newBenXe;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async updateBenXe(id, data) {
    try {
      const updatedBenXe = await benXeSchema.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (!updatedBenXe) {
        throw new Error('Error while update');
      }
      return updatedBenXe;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async deleteBenXe(id) {
    try {
      const deletedBenXe = await benXeSchema.findByIdAndDelete(id);
      if (!deletedBenXe) {
        return null;
      }
      return deletedBenXe;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
module.exports = new benXeService();
