const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  description: String,
  status: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tasks", tasksSchema);