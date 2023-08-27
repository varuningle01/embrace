const Grievance = require("../models/Grievance");
const Student = require("../models/Student");

exports.getAll = async (req, res, next) => {
  try {
    const grievances = await Grievance.find().populate("student");
    res.send(grievances);
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  const StudentId = req.params.StudentId;
  try {
    const student = await Student.findById(StudentId);
    if (!student) {
      return res.status(404).send({ message: "Student not found" });
    }

    const grievances = await Grievance.find({ student: StudentId }); // Assuming you have a 'student' field in the Grievance model referencing the student

    return res.status(200).send({ student, grievances }); // Send both student and grievances as response
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

exports.addGrievance = async (req, res, next) => {
  const grievanceData = req.body;
  const StudentId = req.params.StudentId;

  // Extract studentId from the request body
  const { type, category, description, status, date } = grievanceData;

  try {
    // Check if the student exists
    const student = await Student.findById(StudentId);
    if (!student) {
      return res.status(404).send({ message: "Student not found" });
    }

    // Create the grievance and associate it with the student
    await Grievance.create({
      student: StudentId,
      type: type,
      category: category,
      description: description,
      status: status, // Use the provided status value
      date: date, // Use the provided otherProperty value
    });

    res.status(201).send({ message: "Grievances Submitted Successfully" });
  } catch (error) {
    next(error);
  }
};

exports.deleteGrievance = async (req, res, next) => {
  const grievanceId = req.params.id;
  try {
    const deletedGrievance = await Grievance.findByIdAndDelete(grievanceId);
    if (!deletedGrievance) {
      return res.status(404).send({ message: "Grievnace not found" });
    }
    res.send({ message: "Grievance deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.patchGrievance = async (req, res, next) => {
  const grievanceId = req.params.id;
  const updatedData = req.body;
  try {
    const patchedGrievance = await Grievance.findByIdAndUpdate(
      grievanceId,
      { $set: updatedData },
      { new: true }
    );
    if (!patchedGrievance) {
      return res.status(404).send({ message: "Grievance not found" });
    }
    res.send({
      message: "Grievance patched successfully",
      grievance: patchedGrievance,
    });
  } catch (error) {
    next(error);
  }
};
