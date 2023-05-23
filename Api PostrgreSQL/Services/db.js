import pgPromise from 'pg-promise';
import dotenv from "dotenv"
const pgp = pgPromise();
dotenv.config()
const db = pgp(`postgres://postgres:${process.env.DB_PASSWORD}@10.63.27.38:5432/railinspector`);
export default db;
