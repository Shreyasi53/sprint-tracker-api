import express from "express";
import {
  createSprint,
  addTaskToSprint,
} from "../controllers/Sprint.controller.js";

import { validate } from "../middleware/validate.js";
import { sprintSchema } from "../validations/Sprint.validation.js";

const router = express.Router();

router.post("/", validate(sprintSchema), createSprint);

router.post("/:id/tasks", addTaskToSprint);

export default router;
