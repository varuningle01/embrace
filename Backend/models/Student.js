const mongoose = require("mongoose");
const Grievance = require("../models/Grievance");

const studentSchema = new mongoose.Schema({
  grievances: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grievance",
    },
  ],
  communityPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  institutionId: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
  },
  branch: {
    type: String,
  },
  semester: {
    type: Number,
  },
  profilePic: {
    type: String,
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
