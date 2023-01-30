import { Router } from "express";
import { signIn, signUp } from "../controllers/authControllers.js";
import { validateSignInSchema, validateSignUpSchema } from "../middlewares/authMiddlewares.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSignUpSchema, signUp);
authRouter.post("/sign-in", validateSignInSchema, signIn);
export default authRouter;
