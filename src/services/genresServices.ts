import { Genre } from "@prisma/client";
import conflictError from "../errors/conflictError.js";
import notFoundError from "../errors/notFoundError.js";
import { GenresEntity } from "../protocols/genres.js";
import genresRepository from "../repositories/genresRepository.js";

async function addNewGenre(name: string): Promise<void> {
    const genre = await genresRepository.findGenreByName(name);

    if (genre !== null) {
        throw conflictError();
    }

    await genresRepository.insertGenre(name);
}

async function deleteGenreById(id: number): Promise<void> {
    const genre = await genresRepository.findById(id);

    if (genre === null) {
        throw notFoundError();
    }

    await genresRepository.deleteById(id);
}

async function getAllGenres(): Promise<GenresEntity[]> {
    const genres = await genresRepository.findMany();

    return genres;
}

async function countGenre(): Promise<
    Array<
        Genre & {
            _count: {
                movies: number;
            };
        }
    >
> {
    const counts = await genresRepository.countGenreApperance();

    return counts;
}

const genresServices = {
    addNewGenre,
    deleteGenreById,
    getAllGenres,
    countGenre,
};

export default genresServices;
