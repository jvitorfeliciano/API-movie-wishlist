import { Router } from "express";
import {
    addMovieToUserList,
    deleteMovieFromUserList,
    getUserMovies,
    updateMovieStatus,
} from "../controllers/usersController.js";
import { authValidation } from "../middlewares/authMiddlewares.js";

const usersRouter = Router();

usersRouter.all("/*", authValidation);
usersRouter.post("/users/movies-list/:movieId", addMovieToUserList);
usersRouter.get("/users/movies-list", getUserMovies);
usersRouter.patch("/users/movies-list/:movieId", updateMovieStatus);
usersRouter.delete("/users/movies-list/:movieId", deleteMovieFromUserList);

export default usersRouter;
