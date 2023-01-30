import conflictError from "../errors/conflictError.js";
import { UserSchema } from "../protocols/users.js";
import usersRepository from "../repositories/usersRepository.js";
import bcrypt from "bcrypt";

async function createUser(userData: UserSchema) {
    await validateEmail(userData.email);

    const encryptedPassword = bcrypt.hashSync(userData.password, 10);

    const data = { name: userData.name, email: userData.email, password: encryptedPassword };

    await usersRepository.create(data);
}

async function validateEmail(email: string) {
    const user = await usersRepository.findByEmail(email);

    if (user !== null) {
        throw conflictError();
    }
}

const usersServices = {
    createUser,
};

export default usersServices;
