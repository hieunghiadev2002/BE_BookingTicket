const mongoose = require('mongoose');

const chuyenXeSchema = new mongoose.Schema({
  ngayDi: {
    type: Date,
    require: true,
  },

  ngayDen: {
    type: Date,
    require: true,
  },
  giaChuyenXe: {
    type: Number,
    require: true,
    trim: true,
  },
  soChoTrong: {
    type: Number,
    require: true,
  },
  tuyenXe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tuyenXe',
    require: true,
  },
  xe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Xe',
    require: true,
  },
});

module.exports = mongoose.model('chuyenXe', chuyenXeSchema);
