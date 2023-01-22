import { NextFunction, Request, Response } from "express";
import treatError from "../errors/treatErrors.js";
import { Movie } from "../protocols/movies.js";
import moviesService from "../services/moviesServices.js";

export async function addNewMovie(req: Request, res: Response, next: NextFunction): Promise<void> {
    const movieInformations = req.body as Movie;

    try {
        await moviesService.addNewMovie(movieInformations);
        res.sendStatus(201);
    } catch (err) {
        const { status, message } = treatError(err);
        res.status(status).send({ message });
    }
}
