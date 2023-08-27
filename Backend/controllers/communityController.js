const Community = require("../models/Community");
const Student = require("../models/Student");

// Get all community posts
exports.getAllCommunityPosts = async (req, res, next) => {
  try {
    const communityPosts = await Community.find()
      .populate("author")
      .sort({ timestamp: -1 }); // Populate the author field with only the 'name' property

    res.send(communityPosts);
  } catch (error) {
    next(error);
  }
};

// Create a new community post
exports.createCommunityPost = async (req, res, next) => {
  const communityData = req.body;
  const StudentId = req.params.StudentId;
  const { textContent, imageContent, timestamp } = communityData;
  try {
    const student = await Student.findById(StudentId);
    if (!student) {
      return res.status(404).send({ message: "Student not found" });
    }

    await Community.create({
      author: StudentId,
      textContent: textContent,
      imageContent: imageContent,
      timestamp: timestamp,
      // Use the provided otherProperty value
    });
    res.status(201).send({ message: "Community Post Created Successfully" });
  } catch (error) {
    next(error);
  }
};
exports.getById = async (req, res, next) => {
  const StudentId = req.params.StudentId;
  try {
    const author = await Student.findById(StudentId);
    if (!author) {
      return res.status(404).send({ message: "Student not found" });
    }

    const communities = await Community.find({ author: StudentId }); // Assuming you have a 'student' field in the Grievance model referencing the student

    return res.status(200).send({ author, communities }); // Send both student and grievances as response
  } catch (error) {
    next(error);
  }
};
