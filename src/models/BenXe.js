const mongoose = require('mongoose');

const benXeSchema = new mongoose.Schema({
  tenBenXe: {
    type: String,
    required: true,
  },
  diaChi: {
    type: String,
    required: true,
  },
  tinhThanh: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tinhThanh',
    required: true,
  },
});

module.exports = mongoose.model('benXe', benXeSchema);
