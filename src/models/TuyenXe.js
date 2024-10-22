const mongoose = require("mongoose");

const tuyenXeSchema = new mongoose.Schema({
  tenTuyen: {
    type: String,
    require: true,
    trim: true,
  },
  soChuyenTrongNgay: {
    type: Number,
    require: true,
  },
  timeDiChuyen: {
    type: String,
    require: true,
    trim: true,
  },
  Gia: {
    type: Number,
    require: true,
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
  quangDuong: {
    type: String,
    require: true,
    trim: true,
  },
  benXe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "benXe",
    require: true,
  },
});

module.exports = mongoose.model("tuyenXe", tuyenXeSchema);
