import conflictError from "../errors/conflictError.js";
import notFoundError from "../errors/notFoundError.js";
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
     console.log(genre.rows)
    if (genre.rowCount === 0) {
        throw notFoundError();
    }

    await genresRepository.deleteById(id);
}

const genresServices = {
    addNewGenre,
    deleteGenreById,
};

export default genresServices;
