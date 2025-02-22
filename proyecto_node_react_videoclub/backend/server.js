import app from "./src/app.js"; // Asegúrate de incluir la extensión .js
import { PORT } from "./src/config/config.js";


app.listen(PORT,'0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
