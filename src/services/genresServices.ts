import conflictError from "../errors/conflictError.js";
import genresRepository from "../repositories/genresRepository.js";

async function addNewGenre(name: string): Promise<void> {
    const genre = await genresRepository.findGenreByName(name);

    if (genre.rowCount > 0) {
        throw conflictError();
    }

    await genresRepository.insertGenre(name);
}

const genresServices = {
    addNewGenre,
};

export default genresServices;
