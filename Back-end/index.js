var express = require('express');
var path = require('path');
var app = express();
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://admin:admin@ds119380.mlab.com:19380/pickdb';

function getComparaciones(query, callback) {
	MongoClient.connect(url, function(err, db) {
		assert.equal(null, err);
		console.log("Connected successfully to Mongo");
		var comparaciones = db.collection("comparaciones");
		console.log(comparaciones);

		comparaciones.find(query).toArray(function(err, docs) {
	    assert.equal(err, null);
	    console.log("Found the following records");
	    console.log(docs);
	    //callback(docs);

	    db.close();
	  });
	});
}

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'))

// Setup logger
//app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'Front-end/')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  getComparaciones()
});

// app.get('/index_jquery', function (req, res) {
// 	res.render("index_jquery");
// });

app.listen(3000, function () {
  console.log('Starting on port 3000!');
});
