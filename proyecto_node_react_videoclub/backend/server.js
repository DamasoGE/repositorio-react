import app from "./src/app.js"; // Asegúrate de incluir la extensión .js
import { PORT } from "./src/config/config.js";


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
