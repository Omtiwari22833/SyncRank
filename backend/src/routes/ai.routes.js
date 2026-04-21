import express from "express";
import { analyze } from "../controllers/ai.controller.js";

const router = express.Router();

router.get("/:userId", analyze);

export default router;