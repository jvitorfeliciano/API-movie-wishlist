import { ErrorInfos } from "../protocols/errors.js";

export default function forbbidenError(): ErrorInfos {
    return {
        name: "ForbiddenError",
        message: "Not found",
    };
}
