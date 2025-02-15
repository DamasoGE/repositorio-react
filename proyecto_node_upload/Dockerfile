#Imagen de partida
FROM node:23-alpine
WORKDIR /app
# Instalar dependencias
COPY package*.json ./
RUN npm install
COPY . .
# Exponer el puerto
EXPOSE 3000
# Comando de inicio
CMD ["npm", "run", "start"]