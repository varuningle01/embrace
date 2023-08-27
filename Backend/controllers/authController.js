const jwt = require("jsonwebtoken");
const Student = require("../models/Student");

const createToken = (student) => {
  return jwt.sign({ id: student._id }, "your-secret-key", {
    expiresIn: "1h",
  });
};

exports.register = async (req, res, next) => {
  const studentData = req.body;
  try {
    await Student.create(studentData);
    res.status(201).send({ message: "Registration Done Successfully" });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    if (student.password !== password) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const token = createToken(student);
    res.json({ token, studentID: student._id });
  } catch (error) {
    next(error);
  }
};
