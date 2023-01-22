interface GenresEntity {
    id: number;
    name: string;
}

type Genre = Omit<GenresEntity, "id">;

export { GenresEntity, Genre };
