import prisma from "../db/db.js";
import { Genre_Ids } from "../protocols/genres.js";

async function insertGenre(name: string) {
    return await prisma.genre.create({
        data: {
            name,
        },
    });
}

async function findGenreByName(name: string) {
    return await prisma.genre.findFirst({
        where: {
            name,
        },
    });
}

async function deleteById(id: number) {}

async function findById(id: number) {}

async function findAll() {}
async function findManyById(array: Genre_Ids) {}

async function countGenreApperance() {}

async function deleteGenreAndMovieRelation(genreId: number) {}

const genresRepository = {
    insertGenre,
    findGenreByName,
    deleteById,
    findById,
    findAll,
    findManyById,
    countGenreApperance,
    deleteGenreAndMovieRelation,
};

export default genresRepository;
