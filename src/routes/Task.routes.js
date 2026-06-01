import express from "express";
import {
  updateTaskStatus,
  assignEngineerToTask,
} from "../controllers/Task.controller.js";

import { validate } from "../middleware/validate.js";
import { updateTaskStatusSchema } from "../validations/Task.validation.js";

const router = express.Router();

router.put("/:id/status", validate(updateTaskStatusSchema), updateTaskStatus);

router.put("/:id/assign/:engineerId", assignEngineerToTask);

export default router;
