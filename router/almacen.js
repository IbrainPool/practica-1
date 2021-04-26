'use estrict'

var express = require('express');
var almacenController = require('../controller/almacen');
var api = express.Router();

api.post('/registro', almacenController.save)
module.exports = api; 