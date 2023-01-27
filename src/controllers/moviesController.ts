import { Request, Response } from "express";
import treatError from "../errors/treatErrors.js";
import { Movie, MovieUpdate } from "../protocols/movies.js";
import moviesServices from "../services/moviesServices.js";

export async function addNewMovie(req: Request, res: Response): Promise<void> {
    const movieInformations = req.body as Movie;

    try {
        await moviesServices.addNewMovie(movieInformations);
        res.sendStatus(201);
    } catch (err) {
        const { status, message } = treatError(err);
        res.status(status).send({ message });
    }
}

export async function getMovieById(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    try {
        const movie = await moviesServices.getMovieById(id);

        res.send(movie);
    } catch (err) {
        const { status, message } = treatError(err);
        res.status(status).send({ message });
    }
}

export async function getAllMovies(req: Request, res: Response): Promise<void> {
    try {
        const movies = await moviesServices.getAllMovies();
        res.send(movies);
    } catch (err) {
        const { status, message } = treatError(err);
        res.status(status).send({ message });
    }
}

/* export async function getMoviesByGenre(req: Request, res: Response): Promise<void> {
    const genrerId = Number(req.params.id);

    try {
        const movies = await moviesServices.getMoviesByGenre(genrerId);
        res.send(movies);
    } catch (err) {
        const { status, message } = treatError(err);
        res.status(status).send({ message });
    }
} */

/* export async function updateMovieDescription(req: Request, res: Response): Promise<void> {
    const movieId = Number(req.params.id);
    const movieDescription = req.body as MovieUpdate;

    try {
        await moviesServices.updateMovieDescription(movieDescription, movieId);

        res.sendStatus(204);
    } catch (err) {
        const { status, message } = treatError(err);
        res.status(status).send({ message });
    }
} */

/* export async function deleteMovie(req: Request, res: Response): Promise<void> {
    const movieId = Number(req.params.id);

    try {
        await moviesServices.deleteMovie(movieId);

        res.sendStatus(204);
    } catch (err) {
        const { status, message } = treatError(err);
        res.status(status).send({ message });
    }
}
 */
