import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { userSignInSchema, userSignUpSchema } from "../schemas/userSchema.js";

export function validateSignUpSchema(req: Request, res: Response, next: NextFunction): void {
    const userData = req.body;

    const { error } = userSignUpSchema.validate(userData, { abortEarly: false });

    if (error === undefined) {
        next();
    } else {
        const errors = error.details.map((detail) => detail.message);
        res.status(httpStatus.BAD_REQUEST).send({ errors });
    }
}

export function validateSignInSchema(req: Request, res: Response, next: NextFunction): void {
    const userData = req.body;

    const { error } = userSignInSchema.validate(userData, { abortEarly: false });

    if (error === undefined) {
        next();
    } else {
        const errors = error.details.map((detail) => detail.message);
        res.status(httpStatus.BAD_REQUEST).send({ errors });
    }
}
