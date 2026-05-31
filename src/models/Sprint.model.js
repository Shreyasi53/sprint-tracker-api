import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Sprint = sequelize.define(
  "Sprint",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    sprintNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    goal: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("PLANNED", "IN_PROGRESS", "DONE"),
      allowNull: false,
      defaultValue: "PLANNED",
    },

    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Sprint;