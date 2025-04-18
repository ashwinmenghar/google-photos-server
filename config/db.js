import { drizzle } from "drizzle-orm/postgres-js";
import "dotenv/config";

const db = drizzle(process.env.DATABASE_URL);
export default db;
