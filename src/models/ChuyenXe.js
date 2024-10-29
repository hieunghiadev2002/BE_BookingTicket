const mongoose = require('mongoose');

const chuyenXeSchema = new mongoose.Schema({
  ngayDi: {
    type: Date,
    required: true,
  },

  ngayDen: {
    type: Date,
    required: true,
  },
  giaChuyenXe: {
    type: Number,
    required: true,
    trim: true,
  },
  soChoTrong: {
    type: Number,
    required: true,
  },
  tuyenXe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tuyenXe',
    required: true,
  },
  xe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Xe',
    require: true,
  },
});

module.exports = mongoose.model('chuyenXe', chuyenXeSchema);
