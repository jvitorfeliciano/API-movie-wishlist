import conflictError from "../errors/conflictError.js";
import notFoundError from "../errors/notFoundError.js";
import { Movie } from "../protocols/movies.js";
import genresRepository from "../repositories/genresRepository.js";
import moviesRepository from "../repositories/moviesRepository.js";

async function addNewMovie(object: Movie): Promise<void> {
    await validateGenresExistence(object);
    await validateMovieExistenceByName(object);

    const movie = await moviesRepository.insertMovie(object);
    const movieId: number = movie.rows[0].id;

    await moviesRepository.insertGenreAndMovieIds(object, movieId);
}

async function validateGenresExistence(object: Movie): Promise<void> {
    const genres = await genresRepository.findManyById(object.genre_ids);

    if (genres.rowCount !== object.genre_ids.length) {
        throw notFoundError();
    }
}

async function validateMovieExistenceByName(object: Movie): Promise<void> {
    const movie = await moviesRepository.findByName(object);

    if (movie.rowCount > 0) {
        throw conflictError();
    }
}

const moviesService = {
    addNewMovie,
};

export default moviesService;
