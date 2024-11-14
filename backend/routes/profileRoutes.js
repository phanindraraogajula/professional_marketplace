// routes/users.js (Example Structure)
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const protect = require("../middlewares/auth");
const {
  getUserProfile,
  getAllUsers,
  updateProfile,
} = require("../controllers/profileController");

// Route to Fetch all users
router.get("/allUsers", getAllUsers);

router.get("/profile", protect, getUserProfile);
router.put("/updateProfile", protect, updateProfile);

module.exports = router;