import { QueryResult } from "pg";
import connectionDB from "../db/db.js";
import { Movie, MovieAndGenreIdsEntity, MovieInformations, MoviesEntity, MovieUpdate } from "../protocols/movies.js";

function movieBaseQuery() {}

async function insertMovie(object: Movie) {}

async function findByName(object: Movie) {}

async function insertGenreAndMovieIds(object: Movie, movieId: number) {}

async function findOneById(movieId: number) {}

async function findAll() {}

async function findMoviesByGenre(genreId: number) {}

async function updateDescription(object: MovieUpdate, movieId: number) {}
async function deleteOne(movieId: number) {}

async function deleteGenreAndMovieRelation(genreId: number) {}

const moviesRepository = {
    insertMovie,
    findByName,
    insertGenreAndMovieIds,
    findOneById,
    findAll,
    findMoviesByGenre,
    updateDescription,
    deleteOne,
    deleteGenreAndMovieRelation,
};

export default moviesRepository;
