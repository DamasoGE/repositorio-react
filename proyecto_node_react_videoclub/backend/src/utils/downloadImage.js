// sample code to DL using axios.
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUB_FOLDER = "../../public/img";

const downloadImage = (reqUrl, nameImg) =>{
  const dir = path.resolve(__dirname, SUB_FOLDER, nameImg);

  axios({
    method: "GET",
    url: reqUrl,
    responseType: "stream"
  }).then(res => {
    res.data.pipe(fs.createWriteStream(dir));
    res.data.on("end", () => {
      console.log("download complete");
    });
  });

}

export default downloadImage;