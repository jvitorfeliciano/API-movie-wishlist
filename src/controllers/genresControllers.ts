import { Request, Response } from "express";
import treatError from "../errors/treatErrors.js";
import { Genre } from "../protocols/genres.js";
import genresServices from "../services/genresServices.js";

export async function addNewGenre(req: Request, res: Response): Promise<void> {
    const { name } = req.body as Genre;

    try {
        await genresServices.addNewGenre(name);
        res.sendStatus(201);
    } catch (err) {
        const { status, message } = treatError(err);
        res.status(status).send({ message });
    }
}
