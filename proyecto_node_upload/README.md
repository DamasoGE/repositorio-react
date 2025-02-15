 # UPLOAD NODE
 #### Francisco Dámaso Giménez Escudero
 
 ### Como usar esta aplicación:

- Se debe tener Docker y Docker-Compose
- Levantar los servicios con docker-compose up --build
- Acceder en tu navegador a la dirección: http://localhost:3000/

### BACKEND/FRONTEND (NODE)
(desplegado sobre alpine-23)

El backend se ocupa de proporcionar mediante una carpeta public los archivos que el navegador necesita para interactuar con él.

El backend está desplegado mediante express con las siguientes dependencidas:
- express: framework minimalista que permite generar un servidor y servicio de rutas de forma sencilla.
- charjs: para generar gráficos dinámicos a partir de datos.
- tailwind: para generar estilos a traves de clases en html.

NOTA: Los archivos solo pueden tener 50 caracteres en el nombre para evitar que se salgan de los límites.