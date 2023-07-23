// importo config de la base de datos
const dbConnection = require('./src/db/config'); // importo la función que me conecta a la base de datos
dbConnection(); // ejecuto la función para conectarme a la base de datos

// importo express
const express = require('express');

// creo una instancia de express
const app = express();

// para que express pueda entender los datos que vienen en el body de la petición
app.use(express.json());

// definimos nuestras rutas
app.use('/api/auth', require('./src/routes/auth.routes')) // ruta para usuarios
app.use('/api/products', require('./src/routes/products.routes')) // ruta para productos


// inicio el servidor en el puerto 8080 y muestro un mensaje en consola
app.listen(8080, ()=>{
    console.log('server is running on port 8080'); // http://localhost:8080
})



