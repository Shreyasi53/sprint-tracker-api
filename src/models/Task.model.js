import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    priority: {
      type: DataTypes.ENUM("LOW", "MEDIUM", "HIGH", "CRITICAL"),
      allowNull: false,
      defaultValue: "MEDIUM",
    },

    status: {
      type: DataTypes.ENUM("TODO", "IN_PROGRESS", "REVIEW", "DONE"),
      allowNull: false,
      defaultValue: "TODO",
    },

    estimatedHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    actualHours: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    sprintId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    engineerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);

export default Task;
