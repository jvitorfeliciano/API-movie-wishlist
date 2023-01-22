import { NextFunction, Request, Response } from "express";
import { Genre } from "../protocols/genres.js";
import genreSchema from "../schemas/genreSchema.js";

export default function validateSchema(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    const genreName = req.body as Genre;

    const { error } = genreSchema.validate(genreName);

    if (error === undefined) {
        next();
    } else {
        res.status(400).send({ message: "fill the field correctly" });
    }
}
