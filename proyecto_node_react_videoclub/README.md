 # POKEMON DATABASE
 #### Francisco Dámaso Giménez Escudero
 
 ### Como usar esta aplicación:

- Se debe tener Docker y Docker-Compose
- Levantar los servicios con docker-compose up --build
- Acceder en tu navegador a la dirección: http://localhost:8080/

Todos los servicios están dockerizados

### BACKEND

(desplegado sobre alpine-23)

El backend está construido sobre NODE con las siguientes dependencias:
- axios: utilizado para tomar la imágenes de forma sencilla de una dirección web.
- dotenv: para utilizar variables de entorno en el backend
- express: para montar la api con las rutas donde se encontrará la información.
- bycriptjs: para encriptación de contraseñas
- cookie-parser: para ayudar con la gestion del token de autentificación
- jsonwebtoken: para generar el token de autentificación
- moongose: un módulo para gestionar bases de datos de MongoDB.

### FRONTEND

(desplegado sobre alpine-23)

El frontend está construido sobre NODE mediante VITE con las siguientes dependencidas:
- vite (react): genera de forma sencilla un frontend para utilizar archivos jsx.
- react-router-dom: proporciona una librería para el manejo de rutas de forma sencilla.
- tailwind: para generar estilos a traves de clases en html.

### DATABASE

La base de datos elegida fue MongoDB.

### SERVIDOR WEB

(imagen de docker basada en alpine)

Se ha utlizado NGINX por su facilidad de uso para poder comunicar el frontend y el backend desde dentro de los contenedores. Eso evita que el navegador de la maquina anfitrion se equivoque al redireccionar.


### MONGO-EXPRESS

Permite acceder a la base de datos: http://localhost:8081/ [username: admin, password: admin]