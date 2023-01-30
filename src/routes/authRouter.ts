import { Router } from "express";
import { postUser } from "../controllers/authControllers.js";
import validateSchema from "../middlewares/authMiddlewares.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema, postUser);

export default authRouter;
