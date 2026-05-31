import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Engineer = sequelize.define(
  "Engineer",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    primaryStack: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    experienceYears: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
  }
);

export default Engineer;