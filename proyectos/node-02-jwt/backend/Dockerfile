FROM node:21-alpine
# Creamos el directorio
WORKDIR /usr/src/app
# Copiamos los archivos package.json
COPY package*.json ./
# instalamos las dependencias
RUN npm install
# copiamos el resto de archivos
COPY . .
# exponemos el puerto 3000
EXPOSE 3000
# corremos la aplicación
CMD ["node", "src/server.js"]