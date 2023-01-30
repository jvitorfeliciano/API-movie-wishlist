import { ErrorInfos } from "../protocols/errors.js";

export default function invalidDataError(): ErrorInfos {
    return {
        name: "InvalidDataError",
        message: "Fill the fields correctly",
    };
}
