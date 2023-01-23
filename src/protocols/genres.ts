interface GenresEntity {
    id: number;
    name: string;
}

interface GenreCount {
    amount: string;
    name: string;
}

type Genre = Omit<GenresEntity, "id">;
type Genre_Ids = number[];

export { GenresEntity, Genre, Genre_Ids, GenreCount };
