import { Router } from "express";
import { addMovieToUserList } from "../controllers/usersController.js";
import { authValidation } from "../middlewares/authMiddlewares.js";

const usersRouter = Router();

usersRouter.post("/users/movies-list/:movieId", authValidation, addMovieToUserList);

export default usersRouter;
