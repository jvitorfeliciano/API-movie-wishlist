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

export { MoviesEntity, Movie };
