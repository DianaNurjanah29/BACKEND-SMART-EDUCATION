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
  soal: {
    required: true,
    type: String,
  },
  pilihanA: {
    required: true,
    type: String,
  },
  pilihanB: {
    required: true,
    type: String,
  },
  pilihanC: {
    required: true,
    type: String,
  },
  pilihanD: {
    required: true,
    type: String,
  },
  jenissoal: {
    required: true,
    type: String,
  },
  jawabanbenar: {
    required: true,
    type: String,
  },
  create_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("soal", dataSchema);