import conflictError from "../errors/conflictError.js";
import notFoundError from "../errors/notFoundError.js";
import { GenreCount, GenresEntity } from "../protocols/genres.js";
import genresRepository from "../repositories/genresRepository.js";

async function addNewGenre(name: string): Promise<void> {
    const genre = await genresRepository.findGenreByName(name);

    if (genre !== null) {
        throw conflictError();
    }

    await genresRepository.insertGenre(name);
}

/* async function deleteGenreById(id: number): Promise<void> {
    const genre = await genresRepository.findById(id);

    if (genre.rowCount === 0) {
        throw notFoundError();
    }

    await genresRepository.deleteGenreAndMovieRelation(id);
    await genresRepository.deleteById(id);
} */

/* async function getAllGenres(): Promise<GenresEntity[]> {
    const genres = await genresRepository.findAll();

    return genres.rows;
} */

/* async function countGenre(): Promise<GenreCount[]> {
    const counts = await genresRepository.countGenreApperance();

    return counts.rows;
} */

const genresServices = {
    addNewGenre,
    /* deleteGenreById, */
    /*   getAllGenres, */
    /*  countGenre, */
};

export default genresServices;
