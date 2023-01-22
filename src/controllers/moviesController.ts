import { NextFunction, Request, Response } from "express";
import treatError from "../errors/treatErrors.js";
import { Movie } from "../protocols/movies.js";
import moviesRepository from "../repositories/moviesRepository.js";
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

export async function getMovieById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = Number(req.params.id);

    const movie = await moviesService.getMovieById(id);

    res.send(movie);
}
