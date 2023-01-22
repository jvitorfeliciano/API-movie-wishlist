import { Router } from "express";
import genreRouter from "./genresRouter.js";

const router = Router();

router.use(genreRouter);

export default router;
