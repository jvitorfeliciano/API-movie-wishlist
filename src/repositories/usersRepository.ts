import { User, UsersOnMovies } from "@prisma/client";
import prisma from "../db/db.js";

async function findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
        where: {
            email,
        },
    });
}

async function create(data: Omit<User, "id">): Promise<User> {
    return await prisma.user.create({
        data,
    });
}

async function findById(id: number): Promise<User | null> {
    return await prisma.user.findUnique({
        where: {
            id,
        },
    });
}

async function addMovieToList(userId: number, movieId: number): Promise<UsersOnMovies> {
    return await prisma.usersOnMovies.create({
        data: {
            userId,
            movieId,
        },
    });
}

const usersRepository = {
    findByEmail,
    create,
    findById,
    addMovieToList,
};

export default usersRepository;
