import express from 'express';
import { createClient } from "../controllers/client.controller.js";

const router = express.Router();

router.post("/", createClient);

export default router;