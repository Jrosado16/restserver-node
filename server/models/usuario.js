const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema

let rolValido = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE}, no es un rol válido'
}

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolValido
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})

//el metodo se llama siempre cuando se quiere imprimir algo
//como en este caso queremos imprimir ciertos valores

usuarioSchema.methods.toJSON = function() {
    let user = this
    let userObject = user.toObject()

    delete userObject.password
    return userObject
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' })

module.exports = mongoose.model('Usuario', usuarioSchema)