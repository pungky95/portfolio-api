import {Database} from "../../packages.ts";
import {DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME, DB_DIALECT} from "./env.ts";

const db = new Database(DB_DIALECT, {
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
});
export default db;
