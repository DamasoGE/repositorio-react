//Configuraciones necesarias del proyecto
import dotenv from 'dotenv';

dotenv.config(); //carga las variables de entorno del archivo .env en process.env

export const PORT = process.env.PORT || 3000; //Hemos puesto una medida de seguridad si no coge la variable de entorno.
export const MONGODB_URI = process.env.MONGODB_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const FRONTEND_URL = process.env.FRONTEND_URL;
export const NODE_ENV = process.env.NODE_ENV;

// export const DATABASE_PATH = process.env.DATABASE_PATH || "./database/hotel.sqlite";

