import express from "express";

import userRoutes from "./user.routes.js";
import leaderboardRoutes from "./leaderboard.routes.js";
import aiRoutes from "./ai.routes.js";
import contestRoutes from "./contest.routes.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/leaderboard", leaderboardRoutes);
router.use("/ai", aiRoutes);
router.use("/contest", contestRoutes);

export default router;