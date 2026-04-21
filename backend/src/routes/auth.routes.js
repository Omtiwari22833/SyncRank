import express from "express"
const authRouter = express.Router();
import * as authController from "../controllers/auth.controller.js"

authRouter.post("/register", authController.register);

export default authRouter;