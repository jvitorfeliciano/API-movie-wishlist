import { Router } from "express";
import { addNewGenre } from "../controllers/genresControllers.js";
import validateSchema from "../middlewares/genreMiddlewares.js";

const genreRouter = Router();

genreRouter.post("/genres", validateSchema, addNewGenre);

export default genreRouter;
