import { Genre, Movie } from "@prisma/client";
import prisma from "../db/db.js";
import { MovieInterface, MovieUpdate } from "../protocols/movies.js";

async function findByName(object: MovieInterface): Promise<Movie | null> {
    return await prisma.movie.findFirst({
        where: {
            title: object.title,
        },
    });
}

async function insertMovie(object: MovieInterface): Promise<Movie> {
    const ids = object.genre_ids.map((id) => ({ id }));

    return await prisma.movie.create({
        data: {
            title: object.title,
            poster_picture: object.poster_picture,
            description: object.description,
            genres: {
                connect: ids,
            },
        },
    });
}
async function findOneById(id: number): Promise<
    | (Movie & {
          genres: Genre[];
      })
    | null
> {
    return await prisma.movie.findUnique({
        where: {
            id,
        },
        include: {
            genres: true,
        },
    });
}
async function findMany(): Promise<
    Array<
        Movie & {
            genres: Genre[];
        }
    >
> {
    return await prisma.movie.findMany({
        include: {
            genres: true,
        },
    });
}

async function findMoviesByGenre(id: number): Promise<{
    movies: Array<
        Movie & {
            genres: Genre[];
        }
    >;
} | null> {
    return await prisma.genre.findUnique({
        where: {
            id,
        },
        select: {
            movies: {
                include: {
                    genres: true,
                },
            },
        },
    });
}

async function updateDescription(object: MovieUpdate, movieId: number): Promise<Movie> {
    return await prisma.movie.update({
        where: {
            id: movieId,
        },
        data: {
            description: object.description,
        },
    });
}
async function deleteOne(movieId: number): Promise<Movie> {
    return await prisma.movie.delete({
        where: {
            id: movieId,
        },
    });
}

const moviesRepository = {
    insertMovie,
    findByName,
    findOneById,
    findMany,
    findMoviesByGenre,
    updateDescription,
    deleteOne,
};

export default moviesRepository;
