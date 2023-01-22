import { NextFunction, Request, Response } from "express";
import { Movie } from "../protocols/movies.js";
import movieSchema from "../schemas/movieSchema.js";

export default function validateSchema(req: Request, res: Response, next: NextFunction): void {
    const moviesInformations = req.body as Movie;

    const { error } = movieSchema.validate(moviesInformations);

    console.log(error);

    if (error === undefined) {
        next();
    } else {
        const errors = error.details.map((detail) => detail.message);
        res.status(400).send(errors);
    }
}
