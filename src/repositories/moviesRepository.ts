import prisma from "../db/db.js";
import { Movie, MovieAndGenreIdsEntity, MovieInformations, MoviesEntity, MovieUpdate } from "../protocols/movies.js";

async function findByName(object: Movie) {
    return await prisma.movie.findFirst({
        where: {
            title: object.title,
        },
    });
}

async function insertMovie(object: Movie) {
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
async function findOneById(id: number) {
    return await prisma.movie.findUnique({
        where: {
            id,
        },
        include: {
            genres: true,
        },
    });
}

async function findAll() {}

async function findMoviesByGenre(genreId: number) {}

async function updateDescription(object: MovieUpdate, movieId: number) {}
async function deleteOne(movieId: number) {}

async function deleteGenreAndMovieRelation(genreId: number) {}

const moviesRepository = {
    insertMovie,
    findByName,
    findOneById,
    findAll,
    findMoviesByGenre,
    updateDescription,
    deleteOne,
    deleteGenreAndMovieRelation,
};

export default moviesRepository;
