const mongoose = require("mongoose");

const viTriGheSchema = mongoose.Schema({
  viTri: {
    type: String,
    require: true,
    trim: true,
  },
  trangThai: {
    type: String,
  },
  xe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Xe",
    require: true,
    trim: true,
  },
});

module.exports = mongoose.model("viTriGhe", viTriGheSchema);
