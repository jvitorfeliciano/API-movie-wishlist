import { Router } from "express";
import authRouter from "./authRouter.js";
import genreRouter from "./genresRouter.js";
import moviesRouter from "./moviesRouter.js";
import usersRouter from "./usersRouter.js";

const router = Router();

router.use(genreRouter);
router.use(moviesRouter);
router.use(authRouter);
router.use(usersRouter);
export default router;
