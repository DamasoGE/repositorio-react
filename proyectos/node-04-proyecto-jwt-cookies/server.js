import app from "./src/app.js";
import { PORT } from "./src/config/config.js";

//En server levantamos el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})