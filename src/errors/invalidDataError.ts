import { ErrorInfos } from "../protocols/errors.js";

export default function invalidDataError(): ErrorInfos {
    return {
        name: "InvalidData",
        message: "Fill the fields correctly",
    };
}
