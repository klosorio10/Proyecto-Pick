"use strict";
const Comparaciones = require('../modelos/comparaciones');
const WAL_KEY = 'hqhe9k3wq7wwhxz7xd8hqwan';
var walmart = require('walmart')(WAL_KEY);

module.exports = function(app) {
  app.get('/comparaciones', Comparaciones.list);
  app.get('/comparaciones/:id', Comparaciones.get);
  app.post('/comparaciones', Comparaciones.add);
  app.delete('/comparaciones/:id', Comparaciones.delete);
}
