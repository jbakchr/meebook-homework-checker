const express = require("express");
const { check, validationResult } = require("express-validator");

const Parent = require("../models/Parent");

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  (req, res, next) => {
    // Check for errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Get email and password
    const { email, password } = req.body;

    try {
      res.json({ email, password });
    } catch (err) {
      res.status(500).json({ msg: "Server error" });
    }
  }
);

module.exports = router;
