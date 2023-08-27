const mongoose = require("mongoose");
const Student = require("../models/Student");

const grievanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Resolved"],
    default: "Pending",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Grievance = mongoose.model("Grievance", grievanceSchema);
module.exports = Grievance;
