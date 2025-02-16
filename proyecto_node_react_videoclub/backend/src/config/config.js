//Configuraciones necesarias del proyecto
import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET;
export const MONGODB_URI = process.env.MONGODB_URI;


export const FRONTEND_URL = process.env.FRONTEND_URL;
export const NODE_ENV = process.env.NODE_ENV;

export const URL_API = process.env.URL_API;
export const URL_API_TOKEN = process.env.URL_API_TOKEN;
export const IMAGE_URL = process.env.IMAGE_URL;