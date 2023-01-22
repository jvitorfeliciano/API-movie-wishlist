import { QueryResult } from "pg";
import connectionDB from "../db/db.js";
import { Movie, MoviesEntity } from "../protocols/movies.js";

async function insertMovie(object: Movie): Promise<QueryResult<MoviesEntity>> {
    return await connectionDB.query(`INSERT INTO movies (title, description, poster_picture) VALUES ($1, $2, $3)`, [
        object.title,
        object.description,
        object.poster_picture,
    ]);
}

async function findByName(object: Movie): Promise<QueryResult<MoviesEntity>> {
    return await connectionDB.query(`SELECT * FROM movies WHERE title = $1`, [object.title]);
}

const moviesRepository = {
    insertMovie,
    findByName,
};

export default moviesRepository;