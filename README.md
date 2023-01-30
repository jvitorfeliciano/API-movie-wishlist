# API-movies-catalog-management
 API-movies-catalog-management is a basic back-end project for a typescript and prisma POC

## About

 This application assists in movie catalog management, allowing the monitoring of movies registration and allowing  users the option of adding  movies to their lists.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a new PostgreSQL database
4. Configure the `.env` file using the `.env.example`
5. Run all migrations
```bash
npm run dev:migration
```
6. Run seed db
```bash
npm run dev:seed
```
7. Run the back-end in a development environment:

```bash
npm run dev
```
## Building and starting for production

```bash
npm run build
npm start
```
## Usage
```bash

Genres routes:

Post: /genres
BODY: {"name": "genre_name"}
This route creates a new genre.

GET: /genres
This route sends all genres recorded.

GET: /genres/amount
This route sends the amount of appearance of each genre.

DELETE: /genres/:id
This route deletes the genre with the given id.
```


```bash
Movies routes:

POST: /movies
BODY: {
    title: "movie_title",
    poster_picture:"movie_poster_picture"
    description:"movie_description"
    genre_ids:[genre_ids]
}
This route creates a new movie.

GET: /movies
This route sends all movies recorded.

GET: /movies/:id
This route sends the movie with the given id.

GET: /movies/genres/:id
This route sends the movies accordingly with the given genre id.

PATCH: /movies/:id
BODY: { description:"movie_description"}
This route updates the movie description with the given id.

DELETE: /movies/:id
This route deletes the movie with the given id.
```

```bash
Auth routes:

POST: /sign-up
BODY: {
    name : "user_name",
    email:"user_email"
    password:"user_password"
    confirmPassword:"user_password"
}
This route creates a account for the user.

POST: /sign-in
BODY: {
    email:"user_email"
    password:"user_password"
}
This route logs in the user.
```

```bash
Users routes:

POST: /users/movies-list/:movieId
BODY: {}
This route adds the movie with the given id to the user movies list.

GET: /users/movies-list/
This route sends all movies recorded in the user movies list.

PATCH: /users/movies-list/:movieId
BODY: {}
This route updates the watched status to true of the movie with the given id.

DELETE: /users/movies-list/:movieId
This route deletes the movie with the given id from the user movies list.
```

## License

MIT