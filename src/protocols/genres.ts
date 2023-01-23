interface GenresEntity {
    id: number;
    name: string;
}

interface GenreCount extends GenresEntity {
    amount: string;
}

type Genre = Omit<GenresEntity, "id">;

type Genre_Ids = number[];

export { GenresEntity, Genre, Genre_Ids, GenreCount };
