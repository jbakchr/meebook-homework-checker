const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res, next) => {
  res.json({ msg: "U made it! .." });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
