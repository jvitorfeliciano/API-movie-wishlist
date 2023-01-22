import { QueryResult } from "pg";
import connectionDB from "../db/db.js";
import { GenresEntity } from "../protocols/genres.js";

async function insertGenre(name: string): Promise<QueryResult<GenresEntity>> {
    return connectionDB.query(`INSERT INTO genres (name) VALUES ($1)`, [name]);
}

async function findGenreByName(name: string): Promise<QueryResult<GenresEntity>> {
    return connectionDB.query(`SELECT * FROM genres WHERE name = $1`, [name]);
}
const genresRepository = {
    insertGenre,
    findGenreByName,
};

export default genresRepository;
