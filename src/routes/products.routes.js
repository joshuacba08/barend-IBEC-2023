// creamos un router para manejar las rutas de productos
const router = require('express').Router(); // importo express y ejecuto la función Router para crear un router
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/products.controller');


// http://localhost:8080/api/products (POST)
router.post('/', createProduct ) // ruta para crear un producto

// http://localhost:8080/api/products (GET)
router.get('/',  getProducts) // ruta para obtener todos los productos

// http://localhost:8080/api/products/:id (GET)
// TODO: ruta para obtener un producto por su id (getProductById) siguiendo el ejemplo de getUserById

// http://localhost:8080/api/products/:id (PUT)
router.put('/:id', updateProduct) // ruta para actualizar un producto por su id

// http://localhost:8080/api/products/:id (DELETE)
router.delete('/:id', deleteProduct) // ruta para eliminar un producto por su id

module.exports = router; // exporto el router