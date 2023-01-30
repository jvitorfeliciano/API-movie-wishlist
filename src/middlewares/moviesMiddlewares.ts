import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { MovieInterface, MovieUpdate } from "../protocols/movies.js";
import movieSchema from "../schemas/movieSchema.js";
import movieUpdateSchema from "../schemas/movieUpdateSchema.js";

export function validateSchema(req: Request, res: Response, next: NextFunction): void {
    const movieInformations = req.body as MovieInterface;

    const { error } = movieSchema.validate(movieInformations, { abortEarly: false });

    if (error === undefined) {
        next();
    } else {
        const errors = error.details.map((detail) => detail.message);
        res.status(httpStatus.BAD_REQUEST).send({ errors });
    }
}

export function validateUpdateSchema(req: Request, res: Response, next: NextFunction): void {
    const movieInformations = req.body as MovieUpdate;

    const { error } = movieUpdateSchema.validate(movieInformations, { abortEarly: false });

    if (error === undefined) {
        next();
    } else {
        const errors = error.details.map((detail) => detail.message);
        res.status(httpStatus.BAD_REQUEST).send({ errors });
    }
}
