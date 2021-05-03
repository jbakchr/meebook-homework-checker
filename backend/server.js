require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Routes
const authRoutes = require("./routes/auth");

// DB
const db = require("./db/db");
const dbSeeding = require("./db/dbSeeding");

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Middleware routes
app.use("/api/auth", authRoutes);

db.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
      dbSeeding();
    });
  })
  .catch((err) => console.log(err));
