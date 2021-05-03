const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Parent = require("../models/Parent");

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res, next) => {
    // Check for errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Get email and password
    const { email, password } = req.body;

    try {
      // Check for existing parent
      const parent = await Parent.findOne({ where: { email } });
      console.log(parent);

      if (!parent) {
        return res.status(500).json({ msg: "Invalid email..." });
      }

      // Check password
      const isValidPassword = await bcrypt.compare(password, parent.password);

      if (!isValidPassword) {
        return res.status(500).json({ msg: "Invalid password" });
      }

      // Create and send token
      const token = await jwt.sign({ id: parent.id }, process.env.JWT_SECRET);

      res.json({ token });
    } catch (err) {
      res.status(500).json({ msg: "Server error", err });
    }
  }
);

module.exports = router;
