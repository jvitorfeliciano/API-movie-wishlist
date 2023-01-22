import conflictError from "../errors/conflictError.js";
import notFoundError from "../errors/notFoundError.js";
import { GenresEntity } from "../protocols/genres.js";
import genresRepository from "../repositories/genresRepository.js";

async function addNewGenre(name: string): Promise<void> {
    const genre = await genresRepository.findGenreByName(name);

    if (genre.rowCount > 0) {
        throw conflictError();
    }

    await genresRepository.insertGenre(name);
}

async function deleteGenreById(id: number): Promise<void> {
    const genre = await genresRepository.findById(id);

    if (genre.rowCount === 0) {
        throw notFoundError();
    }

    await genresRepository.deleteById(id);
}

async function getAllGenres(): Promise<GenresEntity[]> {
    const genres = await genresRepository.findAll();

    return genres.rows;
}

const genresServices = {
    addNewGenre,
    deleteGenreById,
    getAllGenres,
};

export default genresServices;
