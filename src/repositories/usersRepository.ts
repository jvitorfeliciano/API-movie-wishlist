import { Genre, Movie, User, UsersOnMovies } from "@prisma/client";
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

async function findUserMovies(userId: number): Promise<
    Array<{
        movie: Movie & {
            genres: Genre[];
        };
        watched: boolean;
    }>
> {
    return await prisma.usersOnMovies.findMany({
        where: {
            userId,
        },
        select: {
            watched: true,
            movie: {
                include: {
                    genres: true,
                },
            },
        },
    });
}

async function updateMovieStatus(userId: number, movieId: number): Promise<UsersOnMovies> {
    return await prisma.usersOnMovies.update({
        where: {
            movieId_userId: {
                // used in compound id in order to establish  the order
                userId,
                movieId,
            },
        },
        data: {
            watched: true,
        },
    });
}

async function deleteUserMovie(userId: number, movieId: number): Promise<UsersOnMovies> {
    return await prisma.usersOnMovies.delete({
        where: {
            movieId_userId: {
                userId,
                movieId,
            },
        },
    });
}

const usersRepository = {
    findByEmail,
    create,
    findById,
    addMovieToList,
    findUserMovies,
    updateMovieStatus,
    deleteUserMovie,
};

export default usersRepository;
