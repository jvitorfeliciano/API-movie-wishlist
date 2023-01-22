import { QueryResult } from "pg";
import connectionDB from "../db/db.js";
import { Movie, MoviesEntity } from "../protocols/movies.js";

async function insertMovie(object: Movie): Promise<QueryResult<MoviesEntity>> {
    return await connectionDB.query(
        `INSERT INTO movies (title, description, poster_picture) VALUES ($1, $2, $3) RETURNING id`,
        [object.title, object.description, object.poster_picture]
    );
}

async function findByName(object: Movie): Promise<QueryResult<MoviesEntity>> {
    return await connectionDB.query(`SELECT * FROM movies WHERE title = $1`, [object.title]);
}

async function insertGenreAndMovieIds(object: Movie, movieId: number) {
    const arrayValues: number[] = [];
    object.genre_ids.forEach((genreId) => arrayValues.push(genreId, movieId));

    const queryValues: string[] = [];

    for (let i = 0; i <= arrayValues.length - 2; i += 2) {
        queryValues.push(`($${i + 1}`, `$${i + 2})`);
    }
    console.log(queryValues.join(", "), arrayValues);
    return await connectionDB.query(
        `INSERT INTO genres_movies (genre_id, movie_id) VALUES ${queryValues.join(", ")}`,
        arrayValues
    );
}

const moviesRepository = {
    insertMovie,
    findByName,
    insertGenreAndMovieIds,
};

export default moviesRepository;
