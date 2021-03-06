'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.port || 3789;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Tienda', {useNewUrlParser: true})
    .then(() => {
        console.log('La conexion de base de datos se ha realizado bien');

        app.listen(port, () =>{
            console.log('Los servicios de Nodejs estan corriendo....');
        });
    })
    .catch(err =>{
        console.error('Error de conexión');
        console.error(err);
    });

