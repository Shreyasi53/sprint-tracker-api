import express from "express";
import {
  createProject,
  getProjectSprints,
} from "../controllers/Project.controller.js";

const router = express.Router();

router.post("/", createProject);

router.get("/:id/sprints", getProjectSprints);

export default router;