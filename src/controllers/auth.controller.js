const response = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt'); // importo bcryptjs para encriptar la contraseña

const register = async(req, res = response) => { // async: función asíncrona
    try {

        // antes de crear un usuario, vamos a encriptar la contraseña
        const salt = bcrypt.genSaltSync(); // genero un salt, un salt es una cadena aleatoria que se agrega a la contraseña para que sea más difícil de descifrar
        req.body.password = bcrypt.hashSync(req.body.password, salt); // encripto la contraseña (req.body.password) con el salt (salt generado en la línea anterior)

        // await: esperar a que se ejecute la función que está a la derecha de await
        const newUser = await User.create(req.body);  // User.create: crea un nuevo usuario en la base de datos

        // antes de enviar la respuesta, vamos a ocultar la contraseña
        newUser.password = undefined;

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

// TODO: crear la función para loguear un usuario
const login = async(req, res = response) => { // función para loguear un usuario valiando su email y contraseña
    try {


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al iniciar sesión',
            error
        })
    }
}

module.exports = { // exporto las funciones para usarlas en otro archivo
    register,
    login
}