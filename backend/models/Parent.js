const { DataTypes } = require("sequelize");

const db = require("../db/db");

const Parent = db.define(
  "parent",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Parent;
