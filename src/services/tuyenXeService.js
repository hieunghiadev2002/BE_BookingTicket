const tuyenXeSchema = require('../models/TuyenXe');
class tuyenXeService {
  constructor() {
    this.tuyenXeSchema = tuyenXeSchema;
  }
  async getTuyenXes() {
    try {
      const listTuyenXes = await this.tuyenXeSchema.find();
      console.log(listTuyenXes);
      return listTuyenXes;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching routes', error);
    }
  }

  async timTuyenXes({ diemDi, diemDen }) {
    try {
      const timChuyenXe = await this.tuyenXeSchema.find({
        diemDi: diemDi,
        diemDen: diemDen,
      });

      return timChuyenXe;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching routes', error);
    }
  }

  async postTuyenXe(data) {
    try {
      const newTuyenXe = await this.tuyenXeSchema.create(data);
      if (!newTuyenXe) {
        throw new Error('Error creating route');
      }
      await newTuyenXe.save();
      return newTuyenXe;
    } catch (error) {
      throw new Error('Error creating route', error);
    }
  }
  async putTuyenXe(id, data) {
    try {
      return await this.tuyenXeSchema.findByIdAndUpdate(id, data, {
        new: true,
      });
    } catch (error) {
      throw new Error('Error updating route', error);
    }
  }
  async deleteTuyenXe(id) {
    try {
      return await this.tuyenXeSchema.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Error deleting route', error);
    }
  }
}
module.exports = new tuyenXeService();
