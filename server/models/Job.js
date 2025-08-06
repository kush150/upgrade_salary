const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  link: String,
  userId: String,
  savedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", jobSchema);