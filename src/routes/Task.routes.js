import express from "express";
import { updateTaskStatus } from "../controllers/Task.controller.js";

const router = express.Router();

router.put("/:id/status", updateTaskStatus);

export default router;