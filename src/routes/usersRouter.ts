import { Router } from "express";
import { addMovieToUserList, getUserMovies } from "../controllers/usersController.js";
import { authValidation } from "../middlewares/authMiddlewares.js";

const usersRouter = Router();

usersRouter.all("/*", authValidation);
usersRouter.post("/users/movies-list/:movieId", addMovieToUserList);
usersRouter.get("/users/movies-list", getUserMovies);
export default usersRouter;
