import express from "express";
import dotenv from "dotenv";
import sequelize from "./src/config/database.js";
import "./src/models/index.js";
import clientRoutes from "./src/routes/Client.routes.js";

dotenv.config();

const app = express();
app.use(clientRoutes);

app.use(express.json());

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