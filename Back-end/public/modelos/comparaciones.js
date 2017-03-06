var mongoose = require('mongoose');
var schema = mongoose.Schema;
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://admin:admin@ds119380.mlab.com:19380/pickdb';
var esquema = new schema({
  Objeto1:  String,
  marca1: String,
  Objeto2:  String,
  marca2: String,
  selected:   String,
  comments: [{ content: String, date: Date }],
  date: { type: Date, default: Date.now }
});

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

var Comparaciones = mongoose.model('pick', esquema);

 exports.Comparaciones = Comparaciones;

  Comparaciones.exports.list = (req, res) => {
	   getComparaciones({},
		 function (comparaciones) {
			 res.json(comparaciones);
		 })
  }

// function (req, res) {
// 	getTweets({},
// 		function (tweets) {
// 			res.render("index", {tweets:tweets});
// 		});
// }
//
//  (req, res) => {
//    getComparaciones()
//    .then(comparaciones.find({}, function(err, comparaciones) {
//      if (err) throw err;
//      console.log(comparaciones);
//    }),
//     res.json(comparaciones);)
//   .error(err => {
//     res.status(500);
//     res.send();
//   })
// }
//
// exports.get = (req, res) => {
//   Comparaciones
//   .get(req.params.id)
//   .then(comparaciones => {
//     res.json(comparaciones);
//   })
//   .error(err => {
//     res.status(404);
//     res.send();
//   })
// }
//
// exports.add = (req, res) => {
//   var comparaciones = new Estudiante(req.index);
//   estudiante.save().then(result => {
//     res.json(estudiante);
//   }).error(err => {
//     console.log(err);
//     res.status(500);
//     res.send();
//   })
// }
//
// exports.delete = (req, res) => {
//   Estudiante.get(req.params.id).then(estudiante => {
//     estudiante.delete().then(result => {
//       console.log(result);
//       res.status(200);
//       res.send();
//     }).error(err => {
//       console.log(err);
//       res.status(500);
//       res.send();
//     })
//   })
