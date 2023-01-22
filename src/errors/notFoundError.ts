import { ErrorInfos } from "../protocols/errors.js";

export default function notFoundError(): ErrorInfos {
    return {
        name: "NotFoundError",
        message: "Not found",
    };
}
