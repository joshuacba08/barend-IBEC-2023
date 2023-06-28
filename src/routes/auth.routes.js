// creamos un router para manejar las rutas de autenticación
const router = require('express').Router();

// importamos el controlador de autenticación TODO: crear el controlador
const { register } = require('../controllers/auth.controller'); // importo la función register del controlador de autenticación

// definimos las rutas

// http://localhost:8080/api/auth/register
router.post('/register', register); // register: función que se ejecuta cuando se hace una petición a esta ruta


router.post('/login', (req, res) => { // http://localhost:8080/api/auth/login
    res.send('login');
});

// exportamos el router
module.exports = router;


// HTTP Methods

// GET: obtener datos
// POST: crear datos (enviar datos)
// PUT: actualizar datos
// DELETE: eliminar datos
// PATCH: actualizar datos parcialmente

// Funciones de un controlador
// req: request, petición
// res: response, respuesta

// req.body: datos que vienen en el body de la petición
// req.params: datos que vienen en la url de la petición
// req.query: datos que vienen en la url de la petición, pero que no son parte de la ruta


// Status Codes
// 200: OK
// 201: Created
// 400: Bad Request
// 401: Unauthorized
// 404: Not Found
// 500: Internal Server Error
// 503: Service Unavailable
// 504: Gateway Timeout




