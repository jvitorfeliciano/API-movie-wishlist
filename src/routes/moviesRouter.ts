import { Router } from "express";
import { addNewMovie, getMovieById } from "../controllers/moviesController.js";
import validateSchema from "../middlewares/moviesMiddlewares.js";

const moviesRouter = Router();

moviesRouter.post("/movies", validateSchema, addNewMovie);
moviesRouter.get("/movies/:id", getMovieById);

export default moviesRouter;
