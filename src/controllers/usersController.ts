import { Response } from "express";
import httpStatus from "http-status";
import treatError from "../errors/treatErrors.js";
import { AuthenticatedRequest } from "../middlewares/authMiddlewares";
import usersServices from "../services/usersServices.js";

export async function addMovieToUserList(req: AuthenticatedRequest, res: Response): Promise<void> {
    const userId = req.userId;
    const movieId = Number(req.params.movieId);

    try {
        await usersServices.addMovieToUserList(userId, movieId);
        res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        treatError(req, res, err);
    }
}

export async function getUserMovies(req: AuthenticatedRequest, res: Response): Promise<void> {
    const userId = req.userId;

    try {
        const movies = await usersServices.getUserMovies(userId);

        res.send(movies);
    } catch (err) {
        treatError(req, res, err);
    }
}

export async function updateMovieStatus(req: AuthenticatedRequest, res: Response): Promise<void> {
    const userId = req.userId;
    const movieId = Number(req.params.movieId);

    try {
        await usersServices.updateMovieStatus(userId, movieId);

        res.sendStatus(httpStatus.NO_CONTENT);
    } catch (err) {
        treatError(req, res, err);
    }
}

export async function deleteMovieFromUserList(req: AuthenticatedRequest, res: Response): Promise<void> {
    const userId = req.userId;
    const movieId = Number(req.params.movieId);

    try {
        await usersServices.deleteMovieFromUserList(userId, movieId);

        res.sendStatus(httpStatus.NO_CONTENT);
    } catch (err) {
        treatError(req, res, err);
    }
}
