import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;

const connectionDB = new Pool({
    connectionString: process.env.DATA_BASE_URL,
});

export default connectionDB;
