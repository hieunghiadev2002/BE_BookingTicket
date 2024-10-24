const tinhThanhSchema = require('../models/TinhThanh');
class tinhThanhService {
  constructor() {
    this.tinhThanhSchema = tinhThanhSchema;
  }
  async getAllTinhThanhService({ limit, page, search }) {
    try {
      const query = search
        ? { tenTinhThanh: { $regex: `^${search}`, $options: 'i' } } // Starts with search term
        : {};

      const tinhThanh = await this.tinhThanhSchema
        .find(query)
        .limit(limit * 1)
        .skip((page - 1) * limit);

      const count = await this.tinhThanhSchema.countDocuments(query);

      return {
        tinhThanh,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      };
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
module.exports = new tinhThanhService();
