import { ErrorInfos, ErrorStatus } from "../protocols/errors.js";

export default function treatError(obj: ErrorInfos): ErrorStatus {
    const { name, message } = obj;

    if (name === "ConflictError") {
        return {
            status: 409,
            message,
        };
    } else {
        return {
            status: 500,
            message,
        };
    }
}
