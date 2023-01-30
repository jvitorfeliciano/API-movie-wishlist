import { Request, Response } from "express";
import { ErrorInfos } from "../protocols/errors.js";
import httpStatus from "http-status";

export default function treatError(req: Request, res: Response, obj: ErrorInfos): void {
    const { name, message } = obj;

    if (name === "ConflictError") {
        console.log("conflict");
        res.status(httpStatus.CONFLICT).send({ message });
    } else if (name === "NotFoundError") {
        res.status(httpStatus.NOT_FOUND).send({ message });
    } else if (name === "UnauthorizedError") {
        res.status(httpStatus.UNAUTHORIZED).send({ message });
    } else if (name === "ForbiddenError") {
        res.status(httpStatus.FORBIDDEN).send({ message });
    } else if (name === "InvalidDataError") {
        res.status(httpStatus.BAD_REQUEST).send({ message });
    } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message });
    }
}
