require("dotenv").config();
const express = require("express");

// Routes
const authRoutes = require("./routes/auth");

// DB
const db = require("./db/db");

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());

// Middleware routes
app.use("/api/auth", authRoutes);

db.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
  })
  .catch((err) => console.log(err));
