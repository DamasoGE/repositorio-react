// gestiono la conexión con la base de datos MONGODB
import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log("Error con la conexión a la DB", error);
        process.exit(1);
    }
}