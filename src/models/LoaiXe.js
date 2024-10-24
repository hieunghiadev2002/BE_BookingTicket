const mongoose = require('mongoose');

const loaiXeSchema = new mongoose.Schema({
  tenLoaiXe: {
    type: String,
    require: true,
    trim: true,
  },
  soGhe: {
    type: Number,
    require: true,
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('LoaiXe', loaiXeSchema);
