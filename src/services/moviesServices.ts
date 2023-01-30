import conflictError from "../errors/conflictError.js";
import notFoundError from "../errors/notFoundError.js";
import { MovieInterface, MovieInformations, MovieUpdate } from "../protocols/movies.js";
import genresRepository from "../repositories/genresRepository.js";
import moviesRepository from "../repositories/moviesRepository.js";

async function addNewMovie(object: MovieInterface): Promise<void> {
    await validateGenresExistence(object);
    await validateMovieExistenceByName(object);

    await moviesRepository.insertMovie(object);
}

async function validateGenresExistence(object: MovieInterface): Promise<void> {
    const genres = await genresRepository.findManyById(object.genre_ids);

    if (genres.length !== object.genre_ids.length) {
        throw notFoundError();
    }
}

async function validateMovieExistenceByName(object: MovieInterface): Promise<void> {
    const movie = await moviesRepository.findByName(object);

    if (movie !== null) {
        throw conflictError();
    }
}

async function getMovieById(movieId: number) {
    const movie = await moviesRepository.findOneById(movieId);

    if (movie === null) {
        throw notFoundError();
    }
    return movie;
}

async function getAllMovies(): Promise<MovieInformations[]> {
    const movies = await moviesRepository.findMany();

    return movies;
}

async function getMoviesByGenre(id: number) {
    const genre = await genresRepository.findById(id);

    if (genre === null) {
        throw notFoundError();
    }

    const movies = await moviesRepository.findMoviesByGenre(id);

    return movies;
}

async function updateMovieDescription(object: MovieUpdate, movieId: number): Promise<void> {
    const movie = await moviesRepository.findOneById(movieId);

    if (movie === null) {
        throw notFoundError();
    }

    await moviesRepository.updateDescription(object, movieId);
}

async function deleteMovie(movieId: number): Promise<void> {
    const movie = await moviesRepository.findOneById(movieId);

    if (movie === null) {
        throw notFoundError();
    }

    await moviesRepository.deleteOne(movieId);
}

const moviesServices = {
    addNewMovie,
    getMovieById,
    getAllMovies,
    getMoviesByGenre,
    updateMovieDescription,
    deleteMovie,
};

export default moviesServices;
