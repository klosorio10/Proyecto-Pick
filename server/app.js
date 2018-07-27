// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const flickr = require("flickrapi");
const fs = require("fs");
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
const walmart = require('walmart')('YOUR_API_KEY');

// Connection URL
const url = 'mongodb://admin:admin@ds119380.mlab.com:19380/pickdb';
const esquema = new schema({
    Objeto1:  String,
    marca1: String,
    Objeto2:  String,
    marca2: String,
    selected:   String,
    comments: [{ content: String, date: Date }],
    date: { type: Date, default: Date.now }
});

function getComparaciones(query) {
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

// Assumes that there are two files containing the keys
// $PROJECT_HOME/server/api_key.txt
// $PROJECT_HOME/server/api_secret.txt
function getApiKeys(callback, errorcallback) {
	fs.readFile(path.resolve(__dirname,"./api_key.txt"), "utf-8", (err, api_key) => {
		if (err) {
			errorcallback(err);
			return;
		}
		fs.readFile(path.resolve(__dirname,"./api_secret.txt"), "utf-8",(err, api_secret) => {
			if (err) {
				errorcallback(err);
				return;
			}
			callback(api_key, api_secret);
		});
	});
}

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(cors());

//Searches with Walmart
app.get('/:query', function(req, res)
{
    walmart.search(req.params["query"]).then(function(data)
    {
        for (var i = 0; i < data.items.length; i++) {
            console.log('- name: ' + data.items[i].name);
            console.log('- price: ' + data.items[i].salePrice);
        }
        res.send(data);
    });
});

//Searches with Walmart -- Item
app.get('item/:query', function(req, res)
{
    walmart.getItem(req.params["query"]).then(function(data)
    {
    	console.log('* brand: '+data.product.brand);
        res.send(data);
    });
});


// Searches Flickr for a specific query
app.get('/flickr/:query', function (req, res) {
	console.log("Flickr call query=" + req.params['query'] );
	getApiKeys((api_key, api_secret) => {
		const Flickr = require("flickrapi"),
	    flickrOptions = {
	      api_key: api_key,
	      secret: api_secret
	    };
	    console.log(api_key);
	    console.log(api_secret);
		Flickr.tokenOnly(flickrOptions, function(error, flickr) {
			console.log("tokenOnly");
			if (error) {
				res.send(error);
				return;
			}
		  // we can now use "flickr" as our API object,
		  // but we can only call public methods and access public data
		  flickr.photos.search({
		  	safe:1,
		  	sort:"relevance",
		  	text:req.params["query"]
		  }, (err, data) => {
		  	if (err) res.send(err);
		  	console.log("Got flickr data sending it");
		  	res.send(data);
		  });
		});

	}, (err) => {
		console.log(err);
		res.send("Error!");
	})
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


module.exports = app;
