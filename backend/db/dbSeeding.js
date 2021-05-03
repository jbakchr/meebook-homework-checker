const bcrypt = require("bcryptjs");

const Parent = require("../models/Parent");

const dbSeeding = async () => {
  try {
    await Parent.create({
      email: "test@gmail.com",
      password: bcrypt.hashSync("test", 12),
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbSeeding;
