import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DATABASE_PATH = process.env.DATABASE_PATH || "./database/db.sqlite";
export const UPLOADS_PATH = process.env.UPLOADS_PATH || "./uploads";