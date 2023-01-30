import { Request, Response } from "express";
import httpStatus from "http-status";
import treatError from "../errors/treatErrors.js";
import { UserSchema } from "../protocols/users.js";
import usersServices from "../services/usersServices.js";

export async function signUp(req: Request, res: Response): Promise<void> {
    const userData = req.body as UserSchema;
    try {
        await usersServices.createUser(userData);
        res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        treatError(req, res, err);
    }
}

export async function signIn(req: Request, res: Response): Promise<void> {
    const userData = req.body as Omit<UserSchema, "name" | "confirmPassword">;
    try {
        const token = await usersServices.validateSignIn(userData);
        res.send(token);
    } catch (err) {
        treatError(req, res, err);
    }
}
