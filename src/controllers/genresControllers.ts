import { Request, Response } from "express";
import httpStatus from "http-status";
import treatError from "../errors/treatErrors.js";
import { Genre } from "../protocols/genres.js";
import genresServices from "../services/genresServices.js";

export async function addNewGenre(req: Request, res: Response): Promise<void> {
    const { name } = req.body as Genre;

    try {
        await genresServices.addNewGenre(name);
        res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        treatError(req, res, err);
    }
}

export async function deleteGenreById(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    try {
        await genresServices.deleteGenreById(id);
        res.sendStatus(httpStatus.NO_CONTENT);
    } catch (err) {
        treatError(req, res, err);
    }
}
export async function getAllGenres(req: Request, res: Response): Promise<void> {
    try {
        const genres = await genresServices.getAllGenres();
        res.send(genres);
    } catch (err) {
        treatError(req, res, err);
    }
}

export async function countGenreApperance(req: Request, res: Response): Promise<void> {
    try {
        const count = await genresServices.countGenre();
        res.send(count);
    } catch (err) {
        treatError(req, res, err);
    }
}
