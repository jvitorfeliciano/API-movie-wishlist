import { GenresEntity } from "./genres";

interface MoviesEntity {
    id: number;
    title: string;
    poster_picture: string;
    description: string;
}

interface MovieInterface {
    title: string;
    poster_picture: string;
    description: string;
    genre_ids: number[];
}

type MovieUpdate = Pick<MovieInterface, "description">;

interface MovieInformations extends MoviesEntity {
    genres: GenresEntity[] | null;
}

interface MovieAndGenreIdsEntity {
    id: number;
    genre_id: number;
    movie_id: number;
}

type MovieAndGenreIds = Omit<MovieAndGenreIdsEntity, "id">;

export { MoviesEntity, MovieInterface, MovieInformations, MovieAndGenreIds, MovieUpdate, MovieAndGenreIdsEntity };
