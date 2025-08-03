import express from "express";
import authController from "../controllers/authController.js";
import { validate } from "../middlewares/validate.js";
import { loginSchema, signupSchema } from "../schemas/authSchema.js";

const authRouter = express.Router();

authRouter.post("/signup",validate(signupSchema), authController.signup);
authRouter.post("/login",validate(loginSchema), authController.login);
authRouter.post("/logout", authController.logout);

export default authRouter;
