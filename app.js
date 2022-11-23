//Vincular clases o archivos 
const Server = require('./models/server')

//Permite emplear el .env
require('dotenv').config(); //Cargar toda la importación

//Instanciar un objeto de la clase server 
const server = new Server();

//Escuchar el puerto
server.listen()