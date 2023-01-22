import express, { json } from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";

dotenv.config();

const server = express();

server.use(json());
server.use(router);

const port = process.env.SERVER_PORT as string;

server.listen(port, () => {
    console.log(`Server running in port ${port}`);
});
