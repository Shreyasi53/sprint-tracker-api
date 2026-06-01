import express from "express";
import { getEngineerWorkload, getAvailableEngineers  } from "../controllers/Engineer.controller.js";

const router = express.Router();

router.get("/available", getAvailableEngineers);
router.get("/:id/workload", getEngineerWorkload);

export default router;