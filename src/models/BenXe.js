const mongoose = require("mongoose");

const benXeSchema = new mongoose.Schema({
  tenBen: {
    type: String,
    require: true,
    trim: true,
  },
  diaChi: {
    type: String,
    require: true,
    trim: true,
  },
  quanHuyen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "quanHuyen",
    require: true,
  },
});

module.exports = mongoose.model("benXe", benXeSchema);
