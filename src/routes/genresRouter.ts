import { Router } from "express";
import { addNewGenre, deleteGenreById } from "../controllers/genresControllers.js";
import validateSchema from "../middlewares/genreMiddlewares.js";

const genreRouter = Router();

genreRouter.post("/genres", validateSchema, addNewGenre);
genreRouter.delete("/genres/:id", deleteGenreById);

export default genreRouter;
