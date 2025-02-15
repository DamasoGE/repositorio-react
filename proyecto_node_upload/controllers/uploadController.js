// controllers/uploadController.js
import fs from "fs";
import multer from "multer";
import path from "path";

// Configuración de Multer: almacenamiento y nombres de archivo
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Carpeta donde se guardarán los archivos subidos
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: (req, file, cb) => {
    const safeFilename = Buffer.from(file.originalname, "latin1").toString("utf8"); // 🔹 Asegura UTF-8
    const { name, ext } = path.parse(safeFilename);
    const truncatedName = name.length > 50 ? name.slice(0, 50) : name;
    cb(null, truncatedName + ext);
  }
});

const upload = multer({ storage });

// Controlador para subir archivo
export const uploadFile = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No se ha subido ningún archivo");
    }
    res.send(`Archivo subido con éxito: ${req.file.filename}`);
  } catch (error) {
    res.status(500).send("Error al subir archivo");
  }
};


export const listFiles = (req, res) => {
  const uploadDir = path.join(process.cwd(), "uploads");

  // Leer el contenido del directorio
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).send("Error al listar archivos");
    }

    // Obtener detalles de los ficheros
    let totalSize = 0;
    const fileDetails = files.map((file) => {
      const filePath = path.join(uploadDir, file);

      try {
        const stats = fs.statSync(filePath); // Obtener información del archivo
        totalSize +=stats.size;

        return {
          name: file,
          size: stats.size, // Tamaño en bytes
          created: stats.birthtime, // Fecha de creación
        };
      } catch (err) {
        console.error("Error al obtener los detalles del archivo", err);
        return {
          name: file,
          size: 0,
          created: null,
        };
      }
    });

    res.json({
      files: fileDetails,
      totalSize: totalSize,
    });
  });
};

// Controlador para eliminar un archivo
export const deleteFile = (req, res) => {
  const fileName = req.params.fileName; // Nombre del archivo a eliminar
  const filePath = path.join(process.cwd(), "uploads", fileName);

  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(500).send(`Error al eliminar archivo: ${fileName}`);
    }
    res.send(`Archivo ${fileName} eliminado con éxito`);
  });
};

export { upload };
