import { QueryResult } from "pg";
import connectionDB from "../db/db.js";
import { GenreCount, GenresEntity, Genre_Ids } from "../protocols/genres.js";
import { MovieAndGenreIdsEntity } from "../protocols/movies.js";

async function insertGenre(name: string): Promise<QueryResult<GenresEntity>> {
    return await connectionDB.query(`INSERT INTO genres (name) VALUES ($1)`, [name]);
}

async function findGenreByName(name: string): Promise<QueryResult<GenresEntity>> {
    return await connectionDB.query(`SELECT * FROM genres WHERE name = $1`, [name]);
}

async function deleteById(id: number): Promise<QueryResult<GenresEntity>> {
    console.log("testeeeee");
    return await connectionDB.query(`DELETE FROM genres WHERE id = $1`, [id]);
}

async function findById(id: number): Promise<QueryResult<GenresEntity>> {
    return await connectionDB.query(`SELECT * FROM genres WHERE id = $1`, [id]);
}

async function findAll(): Promise<QueryResult<GenresEntity>> {
    return await connectionDB.query(`SELECT * FROM genres`);
}

async function findManyById(array: Genre_Ids): Promise<QueryResult<GenresEntity>> {
    return await connectionDB.query(`SELECT * FROM genres WHERE id =  SOME ($1)`, [array]);
}

async function countGenreApperance(): Promise<QueryResult<GenreCount>> {
    return await connectionDB.query(`
        WITH genre_count AS(
            SELECT genre_id, COUNT(id) AS amount
            FROM genres_movies
            GROUP BY genre_id
        )
        SELECT g.*, COALESCE(g_c.amount, 0) AS amount
        FROM  
            genres AS g
        LEFT JOIN
            genre_count AS g_c
        ON
            g.id = g_c.genre_id
                    
    `);
}

async function deleteGenreAndMovieRelation(genreId: number): Promise<QueryResult<MovieAndGenreIdsEntity>> {
    console.log("oieee");
    return await connectionDB.query(`DELETE FROM genres_movies WHERE genre_id = $1`, [genreId]);
}

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
