import { ErrorInfos } from "../protocols/errors.js";

export default function unauthorizedError(): ErrorInfos {
    return {
        name: "UnauthorizedError",
        message: "Unauthorized",
    };
}
