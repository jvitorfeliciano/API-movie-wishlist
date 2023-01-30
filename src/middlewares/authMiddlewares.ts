import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import userSchema from "../schemas/userSchema.js";

export default function validateSchema(req: Request, res: Response, next: NextFunction): void {
    const userData = req.body;

    const { error } = userSchema.validate(userData, { abortEarly: false });

    if (error === undefined) {
        next();
    } else {
        const errors = error.details.map((detail) => detail.message);
        res.status(httpStatus.BAD_REQUEST).send({ errors });
    }
}
