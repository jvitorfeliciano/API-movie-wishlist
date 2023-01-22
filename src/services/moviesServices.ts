import notFoundError from "../errors/notFoundError.js";
import { Movie } from "../protocols/movies.js";
import genresRepository from "../repositories/genresRepository.js";
import moviesRepository from "../repositories/moviesRepository.js";

async function addNewMovie(object: Movie): Promise<void> {
    await validateGenresExistence(object);
    await moviesRepository.insertMovie(object);
}

async function validateGenresExistence(object: Movie): Promise<void> {
    const genres = await genresRepository.findManyById(object.genre_ids);

    if (genres.rowCount !== object.genre_ids.length) {
        throw notFoundError();
    }
}

const moviesService = {
    addNewMovie,
};

export default moviesService;
