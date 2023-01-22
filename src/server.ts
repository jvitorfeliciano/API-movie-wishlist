import express, { json } from "express";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(json());

const port = process.env.SERVER_PORT;

server.listen(port, () => {
    console.log(`Server running in port ${port}`);
});
