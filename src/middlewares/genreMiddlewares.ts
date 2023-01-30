import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Genre } from "../protocols/genres.js";
import genreSchema from "../schemas/genreSchema.js";

export default function validateSchema(req: Request, res: Response, next: NextFunction): void {
    const genreName = req.body as Genre;

    const { error } = genreSchema.validate(genreName, { abortEarly: false });

    if (error === undefined) {
        next();
    } else {
        const errors = error.details.map((detail) => detail.message);
        res.status(httpStatus.BAD_REQUEST).send({ errors });
    }
}
