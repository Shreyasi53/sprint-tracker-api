import express from "express";
import dotenv from "dotenv";
import sequelize from "./src/config/database.js";
import "./src/models/index.js";
import clientRoutes from "./src/routes/Client.routes.js";
import projectRoutes from "./src/routes/Project.routes.js";
import sprintRoutes from "./src/routes/Sprint.routes.js";
import taskRoutes from "./src/routes/Task.routes.js";
import engineerRoutes from "./src/routes/Engineer.routes.js";
import { errorHandler } from "./src/middleware/errorHandler.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/clients", clientRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/sprints", sprintRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/engineers", engineerRoutes);
app.use(errorHandler);

try {
  await sequelize.authenticate();
  console.log("Database Connected Successfully");

  await sequelize.sync({ alter: true });
  console.log("Tables Synced Successfully");
} catch (error) {
  console.error("Database Connection Failed:", error.message);
}

app.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${process.env.PORT}`);
});