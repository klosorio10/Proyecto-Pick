// var walmart = require('walmart')('hqhe9k3wq7wwhxz7xd8hqwan');
var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./public/routes/main')

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
routes(app);

app.listen(3000, function () {
  console.log('Starting on port 3000!');
});
