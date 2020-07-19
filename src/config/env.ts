import {config} from 'https://deno.land/x/dotenv/mod.ts';

await config({export: true});
export type DatabaseOptions = "postgres" | "sqlite3" | "mysql" | "mongo";

const env = config();
export const SERVER_NAME = "portfolio";
export const APP_HOST = env.APP_HOST || "localhost";
export const APP_PORT = env.APP_PORT || 3000;

export const DB_HOST = env.DB_HOST;
export const DB_NAME = env.DB_NAME;
export const DB_USER = env.DB_USER;
export const DB_PASSWORD = env.DB_PASSWORD;
export const DB_PORT = +env.DB_PORT;
export const DB_DIALECT = env.DB_DIALECT as DatabaseOptions;
