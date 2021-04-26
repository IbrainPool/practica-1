'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);
var TiendaSchema = Schema({
    nombre: String,
    codigo: String,
    precio: Number,
    descripcion: String
},{
    versionKey: false
});

module.exports = mongoose.model('almacen', TiendaSchema);

