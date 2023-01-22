import { ErrorInfos } from "../protocols/errors";

export default function conflictError(): ErrorInfos {
    return {
        name: "ConflictError",
        message: "Data already registered",
    };
}
