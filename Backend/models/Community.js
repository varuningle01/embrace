const mongoose = require("mongoose");
const Student = require("../models/Student");

const communitySchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  textContent: { type: String, required: true }, // Text content of the post
  imageContent: { type: String }, // URL to the image content
  timestamp: { type: Date, default: Date.now },
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;
