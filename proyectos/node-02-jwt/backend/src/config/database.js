import mongoose from 'mongoose';

export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log("Error al conectar con mongoDB: ", error);
        process.exit(1); //detener la app con codigo de error distinto de 0
    }
}

export default connectDB;