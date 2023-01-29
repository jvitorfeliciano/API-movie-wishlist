import { Router } from "express";
import {
    addNewMovie,
    getAllMovies,
    getMovieById,
    getMoviesByGenre,
    updateMovieDescription,
} from "../controllers/moviesController.js";
import { validateUpdateSchema, validateSchema } from "../middlewares/moviesMiddlewares.js";

const moviesRouter = Router();

moviesRouter.post("/movies", validateSchema, addNewMovie);
moviesRouter.get("/movies", getAllMovies);
moviesRouter.get("/movies/:id", getMovieById);
moviesRouter.get("/movies/genres/:id", getMoviesByGenre);
moviesRouter.patch("/movies/:id", validateUpdateSchema, updateMovieDescription);
/* moviesRouter.delete("/movies/:id", deleteMovie); */

export default moviesRouter;
