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
        const { email, password } = req.body; // extraigo el email y la contraseña del body de la petición

        // busco el usuario en la base de datos
        const user = await User.findOne({ email }); // User.findOne: busca un usuario en la base de datos
        // si no existe el usuario user es null o undefined
        if(!user) { // si el usuario no existe en la base de datos user es null o undefined y si niego el valor de user (!user) es true por lo tanto el usuario no existe e ingreso al if
            return res.status(400).json({ // 400: bad request   
                ok: false,
                msg: 'Email o contraseña incorrectos'
            })
        }
        // si el usuario existe en la base de datos, verifico la contraseña
        // bcrypt.compareSync: compara la contraseña que viene en la petición (password) con la contraseña que está en la base de datos (user.password)
        const validPassword = bcrypt.compareSync(password, user.password); // si la contraseña es correcta, bcrypt.compareSync devuelve true
        // si la contraseña es incorrecta, bcrypt.compareSync devuelve false  
        if(!validPassword) { // si la contraseña es incorrecta, ingreso al if
            return res.status(400).json({ // 400: bad request
                ok: false,
                msg: 'Email o contraseña incorrectos'
            })
        }

        // si el usuario existe y la contraseña es correcta, devuelvo el usuario
        res.status(200).json({ // 200: ok
            ok: true,
            msg: 'Usuario logueado correctamente',
            data: user
        })
        

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al iniciar sesión',
            error
        })
    }
}

const getUsers = async(req, res = response) => {
    try {

        const users = await User.find(); // User.find: busca todos los usuarios en la base de datos

        res.status(200).json({
            ok: true,
            msg: 'Usuarios obtenidos correctamente',
            data: users
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener usuarios',
            error
        })
    }
}

const getUserById = async(req, res = response) => { // función para obtener un usuario por su id
    try {

        const { id } = req.params; // extraigo el id de los parámetros de la petición

        const user = await User.findById(id); // User.findById: busca un usuario por su id en la base de datos

        // si user es null o undefined, el usuario no existe en la base de datos
        if(!user) { // si el usuario no existe en la base de datos, ingreso al if
            return res.status(404).json({ // 404: not found
                ok: false,
                msg: 'Usuario no encontrado'
            })
        }

        // si el usuario existe en la base de datos, devuelvo el usuario
        res.status(200).json({
            ok: true,
            msg: 'Usuario obtenido correctamente',
            data: user
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener usuario',
            error
        })
    }
}

module.exports = { // exporto las funciones para usarlas en otro archivo
    register,
    login,
    getUsers,
    getUserById
}