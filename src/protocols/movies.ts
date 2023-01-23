import { GenresEntity } from "./genres";

interface MoviesEntity {
    id: number;
    title: string;
    poster_picture: string;
    description: string;
}

interface Movie {
    title: string;
    poster_picture: string;
    description: string;
    genre_ids: number[];
}

type MovieUpdate = Pick<Movie, "description">;

interface MovieInformations extends MoviesEntity {
    genres: GenresEntity[] | null;
}

interface MovieAndGenreIdsEntity {
    id: string;
    genre_id: number;
    movie_id: number;
}

type MovieAndGenreIds = Omit<MovieAndGenreIdsEntity, "id">;

export { MoviesEntity, Movie, MovieInformations, MovieAndGenreIds, MovieUpdate, MovieAndGenreIdsEntity };
