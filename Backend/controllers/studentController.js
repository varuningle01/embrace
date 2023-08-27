const Grievance = require("../models/Grievance");
const Student = require("../models/Student");

exports.getAll = async (req, res, next) => {
  try {
    const students = await Student.find().populate("grievances"); // Use "grievances" here
    res.send(students);
  } catch (error) {
    next(error);
  }
};

exports.addStudent = async (req, res, next) => {
  const studentData = req.body;
  try {
    await Student.create(studentData);
    res.status(201).send({ message: "Registration Done Successfully" });
  } catch (error) {
    next(error);
  }
};
exports.deleteStudent = async (req, res, next) => {
  const studentId = req.params.id;
  try {
    const deletedStudent = await Student.findByIdAndDelete(studentId);
    if (!deletedStudent) {
      return res.status(404).send({ message: "Student not found" });
    }
    res.send({ message: "Student deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.updateStudent = async (req, res, next) => {
  const studentId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      updatedData,
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).send({ message: "Student not found" });
    }
    res.send({
      message: "Student updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    next(error);
  }
};

exports.patchStudent = async (req, res, next) => {
  const studentId = req.params.id;
  const updatedData = req.body;
  try {
    const patchedStudent = await Student.findByIdAndUpdate(
      studentId,
      { $set: updatedData },
      { new: true }
    );
    if (!patchedStudent) {
      return res.status(404).send({ message: "Student not found" });
    }
    res.send({
      message: "Student patched successfully",
      student: patchedStudent,
    });
  } catch (error) {
    next(error);
  }
};
