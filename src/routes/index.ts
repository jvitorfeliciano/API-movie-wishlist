import { Router } from "express";
import genreRouter from "./genresRouter.js";
import moviesRouter from "./moviesRouter.js";

const router = Router();

router.use(genreRouter);
router.use(moviesRouter);

export default router;
