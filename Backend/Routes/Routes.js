const express = require("express");
const studentController = require("../controllers/studentController");
const grievanceController = require("../controllers/greivanceController");
const authMiddleware = require("../middleware/authMiddleware");
const authController = require("../controllers/authController");
const communityController = require("../controllers/communityController");
const router = express.Router();
// -------------------STudent Routes-------------------
router.get("/api/student", studentController.getAll);
router.post("/api/student", studentController.addStudent);
router.delete("/api/students/:id", studentController.deleteStudent);
router.put("/api/students/:id", studentController.updateStudent);
router.patch(
  "/api/:id/students/",
  authMiddleware.authenticate,
  studentController.patchStudent
);
// -----------------------Grievance Routes-----------------------
router.get(
  "/api/grievances",
  // authMiddleware.authenticate,
  grievanceController.getAll
);
router.post(
  "/api/:StudentId/grievances/",
  authMiddleware.authenticate,
  grievanceController.addGrievance
);
router.get(
  "/api/:StudentId/grievances/",
  authMiddleware.authenticate,
  grievanceController.getById
);
router.delete(
  "/api/:id/grievances",
  // authMiddleware.authenticate,
  grievanceController.deleteGrievance
);
router.put(
  "/api/:id/grievances",
  // authMiddleware.authenticate,
  grievanceController.patchGrievance
);
// ------------------------------Community Routes-----------------------------------
router.get("/api/community", communityController.getAllCommunityPosts);
router.get(
  "/api/:StudentId/community",
  authMiddleware.authenticate,
  communityController.getById
);
// Create a new community post
router.post(
  "/api/:StudentId/community",
  authMiddleware.authenticate,
  communityController.createCommunityPost
);
// ------------------------Authentication routes------------------
router.post("/api/register", authController.register);
router.post("/api/login", authController.login);

module.exports = router;
