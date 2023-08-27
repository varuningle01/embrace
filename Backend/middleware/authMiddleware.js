// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "your-secret-key");
    req.studentId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
