import { Router } from "express";
import validateSchema from "../middlewares/authMiddlewares.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema);

export default authRouter;
