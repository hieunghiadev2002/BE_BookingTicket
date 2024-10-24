const mongoose = require('mongoose');

const tuyenXeSchema = new mongoose.Schema({
  tenTuyenXe: {
    type: String,
    require: true,
    trim: true,
  },
  diemDi: {
    type: String,
    require: true,
    trim: true,
  },
  diemDen: {
    type: String,
    require: true,
    trim: true,
  },
  timeDiChuyen: {
    type: String,
    require: true,
    trim: true,
  },
  khoangCach: {
    type: String,
    require: true,
    trim: true,
  },
  benXe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'benXe',
    require: true,
  },
});

module.exports = mongoose.model('tuyenXe', tuyenXeSchema);
