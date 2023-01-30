import conflictError from "../errors/conflictError.js";
import { UserSchema } from "../protocols/users.js";
import usersRepository from "../repositories/usersRepository.js";
import bcrypt from "bcrypt";
import unauthorizedError from "../errors/UnauthorizedError.js";
import jwt from "jsonwebtoken";
import moviesServices from "./moviesServices.js";

async function createUser(userData: UserSchema): Promise<void> {
    await validateEmail(userData.email);

    const encryptedPassword = bcrypt.hashSync(userData.password, 10);

    const data = { name: userData.name, email: userData.email, password: encryptedPassword };

    await usersRepository.create(data);
}

async function validateEmail(email: string): Promise<void> {
    const user = await usersRepository.findByEmail(email);

    if (user !== null) {
        throw conflictError();
    }
}

function validatePassword(incomingPassword: string, registeredPassword: string): void {
    const isCorrect = bcrypt.compareSync(incomingPassword, registeredPassword);

    if (!isCorrect) {
        throw unauthorizedError();
    }
}

async function validateSignIn(userData: Omit<UserSchema, "name" | "confirmPassword">): Promise<string> {
    const user = await usersRepository.findByEmail(userData.email);

    if (user === null) {
        throw unauthorizedError();
    }

    validatePassword(userData.password, user.password);

    const token = jwt.sign({ id: user.id }, process.env.SECRET_JWT as string, { expiresIn: 86400 });

    return token;
}

async function addMovieToUserList(userId: number, movieId: number): Promise<void> {
    await moviesServices.getMovieById(movieId);

    await usersRepository.addMovieToList(userId, movieId);
}

const usersServices = {
    createUser,
    validateSignIn,
    addMovieToUserList,
};

export default usersServices;
