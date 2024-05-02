const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Users = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(75),
    },
    password: {
      type: DataTypes.STRING(255),
    },
    country: {
      type: DataTypes.STRING(175),
    },
    referralCode: {
      type: DataTypes.STRING(75),
    },
  },
  {
    tableName: "Users",
    timestamps: false, // Add this line to disable createdAt and updatedAt fields
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

module.exports = Users;
