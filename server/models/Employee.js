const mongoose = require("mongoose");

module.exports = mongoose.model("Employee", new mongoose.Schema({
  name: String,
  gender: String,
  department: [String],
  salary: Number,
  avatar: String,
  date: String
}));
