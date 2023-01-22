import { Router } from "express";
import { addNewMovie } from "../controllers/moviesController.js";
import validateSchema from "../middlewares/moviesMiddlewares.js";

const moviesRouter = Router();

moviesRouter.post("/movies", validateSchema, addNewMovie);

export default moviesRouter;
