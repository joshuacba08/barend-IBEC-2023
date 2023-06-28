const response = require('express');
const User = require('../models/user');

const register = async(req, res = response) => { // async: función asíncrona
    try {

        // await: esperar a que se ejecute la función que está a la derecha de await
        const newUser = await User.create(req.body);  // User.create: crea un nuevo usuario en la base de datos

        res.status(201).json({ // 201: recurso creado correctamente
            ok: true,
            msg: 'Usuario creado correctamente',
            data: newUser
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al registrar usuario',
            error
        })
    }
}

module.exports = { // exporto las funciones para usarlas en otro archivo
    register
}