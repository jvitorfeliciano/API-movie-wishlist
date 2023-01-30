import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { userSignInSchema, userSignUpSchema } from "../schemas/userSchema.js";
import jwt from "jsonwebtoken";
import usersRepository from "../repositories/usersRepository.js";

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

export async function authValidation(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    const token = authorization?.replace("Bearer ", "");

    if (!token) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }

    try {
        jwt.verify(token, process.env.SECRET_JWT as string, async (error, decoded: { id: number }) => {
            console.log(error, decoded, "testtttte");

            if (error) {
                return res.sendStatus(httpStatus.UNAUTHORIZED);
            }

            const user = await usersRepository.findById(decoded.id);

            if (!user) {
                return res.sendStatus(httpStatus.UNAUTHORIZED);
            }
            req.userId = user.id;
            next();
        });
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
}

interface JWTPayload {
    userId: number;
}

export type AuthenticatedRequest = Request & JWTPayload;
