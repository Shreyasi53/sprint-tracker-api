import express from "express";
import {
  createSprint,
  addTaskToSprint,
} from "../controllers/Sprint.controller.js";

const router = express.Router();

router.post("/", createSprint);

router.post("/:id/tasks", addTaskToSprint);

export default router;
