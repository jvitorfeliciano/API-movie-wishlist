import { QueryResult } from "pg";
import connectionDB from "../db/db.js";
import { GenresEntity } from "../protocols/genres.js";

async function insertGenre(name: string): Promise<QueryResult<GenresEntity>> {
    return connectionDB.query(`INSERT INTO genres (name) VALUES ($1)`, [name]);
}

async function findGenreByName(name: string): Promise<QueryResult<GenresEntity>> {
    return connectionDB.query(`SELECT * FROM genres WHERE name = $1`, [name]);
}

async function deleteById(id: number): Promise<QueryResult<GenresEntity>> {
    return connectionDB.query(`DELETE FROM genres WHERE id = $1`, [id]);
}

async function findById(id: number): Promise<QueryResult<GenresEntity>> {
    return connectionDB.query(`SELECT * FROM genres WHERE id = $1`, [id]);
}

async function findAll(): Promise<QueryResult<GenresEntity>> {
    return connectionDB.query(`SELECT * FROM genres`);
}

const genresRepository = {
    insertGenre,
    findGenreByName,
    deleteById,
    findById,
    findAll,
};

export default genresRepository;
