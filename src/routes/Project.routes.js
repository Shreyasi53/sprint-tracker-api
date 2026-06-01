import express from "express";
import {
  createProject,
  getProjectSprints,
  getProjectHealth,
} from "../controllers/Project.controller.js";

import { validate } from "../middleware/validate.js";
import { projectSchema } from "../validations/Project.validation.js";

const router = express.Router();

router.post("/", validate(projectSchema), createProject);
router.get("/:id/health", getProjectHealth);
router.get("/:id/sprints", getProjectSprints);

export default router;