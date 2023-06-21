// Objetivo: configurar la conexión a la base de datos
const mongoose = require('mongoose');

// función para conectarnos a la base de datos usando async/await
const dbConnection = async () => { // async: función asíncrona

    try{ // try: intentar ejecutar el código dentro de este bloque

        // await: esperar a que se ejecute la función que está a la derecha de await
        const result = await mongoose.connect('mongodb+srv://joroya:183eOqAgfc8P3zVo@ibec-api.2mylel0.mongodb.net/')
        console.log('resultado de la conexión: ok', result.connection.id);

    }catch(error){ // catch: capturar el error en caso de que ocurra
        console.log(error);
        throw new Error('Error al conectar a la base de datos'); // throw: lanzar un error
    }

}



/* Función de conexión usando .then y .catch con promesas */
// const dbConnection = () => {
    
//     mongoose.connect('mongodb+srv://joroya:183eOqAgfc8P3zVo@ibec-api.2mylel0.mongodb.net/')
//     .then( (resp)=>{ console.log('resultado de la conexión: ok') } )
//     .catch( (error)=>{ console.log('Error en la conexion a base de datos: ', error) } ) 

// }

module.exports = dbConnection;












// const dbConnection = async() => {
//     try{

//     }catch(error){
//         console.log(error);
//         throw new Error('Error al conectar a la base de datos');
//     }
// }




// Base de datos en MongoDB

// MongoDB es una base de datos NoSQL, es decir, no es una base de datos relacional, sino que es una base de datos orientada a documentos.

// example of a document in MongoDB
//   Entidad: User
// {
//     name: 'John Doe',
//     age: 25,
//     email: 'john@gmail.com',
//     password: '123456'
// }

// ORM
// Object Relational Mapping
// Object Document Mapping

// MONGOOSE
// Mongoose es una librería de NodeJS que nos permite conectarnos a una base de datos de MongoDB y nos permite definir modelos para poder interactuar con la base de datos.