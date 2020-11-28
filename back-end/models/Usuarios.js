const mongoose = require('mongoose')

const esquema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    },

    cargo: {
        type: String,
        enum: ['Administrador', 'Operador', 'Financeiro'],
        required: true
    }

});

module.exports = mongoose.model('Usuarios', esquema, 'usuarios')
