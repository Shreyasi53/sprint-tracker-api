import express from "express";
import { updateTaskStatus, assignEngineerToTask } from "../controllers/Task.controller.js";

const router = express.Router();
router.put("/:id/status", updateTaskStatus);
router.put("/:id/assign/:engineerId", assignEngineerToTask);

export default router;