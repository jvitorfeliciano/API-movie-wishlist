import { QueryResult } from "pg";
import connectionDB from "../db/db.js";
import { Movie, MovieAndGenreIds, MovieInformations, MoviesEntity } from "../protocols/movies.js";

function movieBaseQuery(): string {
    return `WITH genres_of_movies AS(
        SELECT g_m.movie_id, array_agg(jsonb_build_object('id', g.id, 'name',g.name )) AS genres
        FROM 
            genres_movies AS g_m
        JOIN
            genres AS g
        ON 
            g.id = g_m.genre_i
        GROUP BY
            g_m.movie_id 
    )
    SELECT  m.*, genres_of_movies.genres
    FROM 
        movies AS m
    JOIN
        genres_of_movies
    ON 
        m.id =  genres_of_movies.movie_id`;
}

async function insertMovie(object: Movie): Promise<QueryResult<MoviesEntity>> {
    return await connectionDB.query(
        `INSERT INTO movies (title, description, poster_picture) VALUES ($1, $2, $3) RETURNING id`,
        [object.title, object.description, object.poster_picture]
    );
}

async function findByName(object: Movie): Promise<QueryResult<MoviesEntity>> {
    return await connectionDB.query(`SELECT * FROM movies WHERE title = $1`, [object.title]);
}

async function insertGenreAndMovieIds(object: Movie, movieId: number): Promise<QueryResult<MovieAndGenreIds>> {
    const arrayValues: number[] = [];
    object.genre_ids.forEach((genreId) => arrayValues.push(genreId, movieId));

    const queryValues: string[] = [];
    for (let i = 0; i <= arrayValues.length - 2; i += 2) {
        queryValues.push(`($${i + 1}`, `$${i + 2})`);
    }

    return await connectionDB.query(
        `INSERT INTO genres_movies (genre_id, movie_id) VALUES ${queryValues.join(", ")}`,
        arrayValues
    );
}

async function findOneById(movieId: number): Promise<QueryResult<MovieInformations>> {
    return await connectionDB.query(movieBaseQuery() + ` WHERE m.id = $1`, [movieId]);
}

async function findAll(): Promise<QueryResult<MovieInformations>> {
    return await connectionDB.query(movieBaseQuery());
}

async function findMoviesByGenre(genreId: number): Promise<QueryResult<MovieInformations>> {
    return await connectionDB.query(
        `WITH genres_of_movies AS(
        SELECT g_m.movie_id, array_agg(jsonb_build_object('id', g.id, 'name',g.name )) AS genres
        FROM 
            genres_movies AS g_m
        JOIN
            genres AS g
        ON 
            g.id = g_m.genre_id
        WHERE
            g.id = $1
        GROUP BY
            g_m.movie_id 
    )
    SELECT  m.*, genres_of_movies.genres
    FROM 
        movies AS m
    JOIN
        genres_of_movies
    ON 
        m.id =  genres_of_movies.movie_id`,
        [genreId]
    );
}

const moviesRepository = {
    insertMovie,
    findByName,
    insertGenreAndMovieIds,
    findOneById,
    findAll,
    findMoviesByGenre,
};

export default moviesRepository;
