import { DataTypes,Sequelize } from "sequelize";
import { db } from "../utils/conn.js";
 const User = db.define(
    "User",
    {
        userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      referralCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timestamps: false,
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
);

  
 export default User;
