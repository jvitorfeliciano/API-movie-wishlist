--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: genres; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genres (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: genres_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genres_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genres_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genres_id_seq OWNED BY public.genres.id;


--
-- Name: genres_movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genres_movies (
    id integer NOT NULL,
    genre_id integer NOT NULL,
    movie_id integer NOT NULL
);


--
-- Name: genres_movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genres_movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genres_movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genres_movies_id_seq OWNED BY public.genres_movies.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    poster_picture text NOT NULL
);


--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: genres id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres ALTER COLUMN id SET DEFAULT nextval('public.genres_id_seq'::regclass);


--
-- Name: genres_movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres_movies ALTER COLUMN id SET DEFAULT nextval('public.genres_movies_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genres VALUES (2, 'Aventura');
INSERT INTO public.genres VALUES (3, 'comédia');
INSERT INTO public.genres VALUES (4, 'romance');
INSERT INTO public.genres VALUES (5, 'Supense');
INSERT INTO public.genres VALUES (6, 'Policial');
INSERT INTO public.genres VALUES (7, 'emoçao');
INSERT INTO public.genres VALUES (8, 'Adrenalina');
INSERT INTO public.genres VALUES (9, 'infantil');
INSERT INTO public.genres VALUES (11, 'Bibliográfico');


--
-- Data for Name: genres_movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genres_movies VALUES (16, 4, 21);
INSERT INTO public.genres_movies VALUES (17, 2, 22);
INSERT INTO public.genres_movies VALUES (21, 7, 24);
INSERT INTO public.genres_movies VALUES (22, 9, 25);
INSERT INTO public.genres_movies VALUES (23, 6, 25);


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movies VALUES (21, 'Two hearts 2', 'Venha ser feliz e seja contente', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fsad-romance-movies-on-netflix-12-1645532847.jpg&imgrefurl=https%3A%2F%2Fwww.thepioneerwoman.com%2Fnews-entertainment%2Fg39171271%2Fsad-romance-movies-netflix%2F&tbnid=_RpJnObCoujxrM&vet=12ahUKEwjp_6DL59z8AhUtOLkGHR1uCt8QMygDegUIARC8AQ..i&docid=eLivwjY_lBt0XM&w=1920&h=2560&q=romance%20movies&ved=2ahUKEwjp_6DL59z8AhUtOLkGHR1uCt8QMygDegUIARC8AQ');
INSERT INTO public.movies VALUES (22, 'Two hearts 3', 'Venha ser feliz e seja contente', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fsad-romance-movies-on-netflix-12-1645532847.jpg&imgrefurl=https%3A%2F%2Fwww.thepioneerwoman.com%2Fnews-entertainment%2Fg39171271%2Fsad-romance-movies-netflix%2F&tbnid=_RpJnObCoujxrM&vet=12ahUKEwjp_6DL59z8AhUtOLkGHR1uCt8QMygDegUIARC8AQ..i&docid=eLivwjY_lBt0XM&w=1920&h=2560&q=romance%20movies&ved=2ahUKEwjp_6DL59z8AhUtOLkGHR1uCt8QMygDegUIARC8AQ');
INSERT INTO public.movies VALUES (24, 'Suspense 4', 'Venha ser feliz e seja contente', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Finglestreinando.com%2Fwp-content%2Fuploads%2F2019%2F01%2FFilmes-de-Suspense-em-Ingl%25C3%25AAs-800x445-731x407.jpg&imgrefurl=https%3A%2F%2Finglestreinando.com%2Ffilmes-de-suspense-em-ingles&tbnid=8miXFwo6uZLX1M&vet=12ahUKEwibrJfO6Nz8AhWDBbkGHZ1ZClwQMygTegUIARCPAg..i&docid=plRYBgv9MY7FIM&w=731&h=407&q=suspense&ved=2ahUKEwibrJfO6Nz8AhWDBbkGHZ1ZClwQMygTegUIARCPAg');
INSERT INTO public.movies VALUES (25, 'Rambo 1', 'A ação começa aqui', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.papodecinema.com.br%2Fwp-content%2Fuploads%2F2016%2F04%2F20191119-stallone-rambo-papo-de-cinema.jpg&imgrefurl=https%3A%2F%2Fwww.papodecinema.com.br%2Fespeciais%2Fsaga-rambo%2F&tbnid=7Ig1ePAXgfSpEM&vet=12ahUKEwiE9M6Ond78AhUgM7kGHczbBHQQMygAegUIARDjAQ..i&docid=ix-A0kWfVmAZMM&w=800&h=600&q=rambo&ved=2ahUKEwiE9M6Ond78AhUgM7kGHczbBHQQMygAegUIARDjAQ');


--
-- Name: genres_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genres_id_seq', 12, true);


--
-- Name: genres_movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genres_movies_id_seq', 23, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movies_id_seq', 25, true);


--
-- Name: genres_movies genres_movies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres_movies
    ADD CONSTRAINT genres_movies_pkey PRIMARY KEY (id);


--
-- Name: genres genres_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_name_key UNIQUE (name);


--
-- Name: genres genres_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (id);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: movies movies_title_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_title_key UNIQUE (title);


--
-- Name: genres_movies genres_movies_genre_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres_movies
    ADD CONSTRAINT genres_movies_genre_id_fkey FOREIGN KEY (genre_id) REFERENCES public.genres(id);


--
-- Name: genres_movies genres_movies_movie_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres_movies
    ADD CONSTRAINT genres_movies_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES public.movies(id);


--
-- PostgreSQL database dump complete
--

