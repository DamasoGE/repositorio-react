
import app from "./app";
import { PORT } from "./config/config";

//En server levantamos el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})