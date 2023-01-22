import { Router } from "express";
import { addNewMovie, getAllMovies, getMovieById, getMoviesByGenre } from "../controllers/moviesController.js";
import validateSchema from "../middlewares/moviesMiddlewares.js";

const moviesRouter = Router();

moviesRouter.post("/movies", validateSchema, addNewMovie);
moviesRouter.get("/movies", getAllMovies);
moviesRouter.get("/movies/:id", getMovieById);
moviesRouter.get("/movies/genres/:id", getMoviesByGenre);

export default moviesRouter;
