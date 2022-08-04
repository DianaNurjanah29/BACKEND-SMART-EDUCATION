const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  guid: {
    required: true,
    type: String,
  },
  nomorlevel: {
    required: true,
    type: String,
  },
  vidio: {
    required: true,
    type: String,
  },
  create_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("level", dataSchema);