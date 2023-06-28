// creamos un modelo de usuario para subirlo a la base de datos
const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    firstName:{
        type: String, // type: String: es de tipo string
        required: [true, 'El nombre es obligatorio'] // required: true: es obligatorio
    },
    lastName:{
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    email:{
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true // unique: true: el email debe ser único en la base de datos
    },
    password:{
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    role:{
        type: String,
        required: [true, 'El rol es obligatorio'],
        enum: ['ADMIN_ROLE', 'USER_ROLE'] // enum: ['ADMIN_ROLE', 'USER_ROLE']: el rol solo puede ser ADMIN_ROLE o USER_ROLE
    },
    birthDate:{
        type: Date,
        required: [true, 'La fecha de nacimiento es obligatoria'],
    },
}, { timestamps: true }); // timestamps: true: crea dos campos en la base de datos: createdAt y updatedAt


module.exports = model('User', UserSchema, 'users'); // 'User': nombre del modelo, UserSchema: esquema del modelo, 'users': nombre de la colección en la base de datos