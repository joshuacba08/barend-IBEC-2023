const response = require('express'); // importo express para poder usar el método response para enviar respuestas al cliente
const Product = require('../models/product');  // importo el modelo de producto


const createProduct = async(req, res = response) => { // función para crear un producto
    try {
        const newProduct = await Product.create(req.body); // Product.create: crea un nuevo producto en la base de datos

        res.status(201).json({
            ok: true,
            msg: 'Producto creado correctamente',
            data: newProduct
        })
        
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear producto',
            error
        })
    }
}

const getProducts = async(req, res = response) => { // función para obtener todos los productos
    try {
        const products = await Product.find(); // Product.find: busca todos los productos en la base de datos

        res.status(200).json({
            ok: true,
            msg: 'Productos obtenidos correctamente',
            data: products
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener productos',
            error
        })
    }

};


const updateProduct = async(req, res = response) => { // función para actualizar un producto
    try {
        const { id } = req.params; // extraigo el id de los parámetros de la petición

        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true}); // Product.findByIdAndUpdate: busca un producto por su id y lo actualiza en la base de datos
        await updatedProduct.save(); // guardo los cambios en la base de datos

        // si updatedProduct es null o undefined, el producto no existe en la base de datos
        if(!updatedProduct) { // si el producto no existe en la base de datos, ingreso al if
            return res.status(404).json({ // 404: not found
                ok: false,
                msg: 'Producto no encontrado'
            })
        }

        // si el producto existe en la base de datos, devuelvo el producto actualizado
        res.status(200).json({
            ok: true,
            msg: 'Producto actualizado correctamente',
            data: updatedProduct
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar producto',
            error
        })
    }
}

const deleteProduct = async(req, res = response) => { // función para eliminar un producto
    try {
        const { id } = req.params; // extraigo el id de los parámetros de la petición

        const deletedProduct = await Product.findByIdAndDelete(id); // Product.findByIdAndDelete: busca un producto por su id y lo elimina de la base de datos

        // si deletedProduct es null o undefined, el producto no existe en la base de datos
        if(!deletedProduct) { // si el producto no existe en la base de datos, ingreso al if
            return res.status(404).json({ // 404: not found
                ok: false,
                msg: 'Producto no encontrado'
            })
        }

        // si el producto existe en la base de datos, devuelvo el producto eliminado
        res.status(200).json({
            ok: true,
            msg: 'Producto eliminado correctamente',
            data: deletedProduct
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar producto',
            error
        })
    }
}




module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
}