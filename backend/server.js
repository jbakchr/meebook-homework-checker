const express = require("express");

const authRoutes = require("./routes/auth");

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
