'use strict';

var express     = require('express');
var app         = express();
var port        = process.env.PORT || 3000;
var path        = __dirname + '/build/';
var bodyparser  = require('body-parser');
var compression = require('compression');
// var mongoose    = require('mongoose');
// var uriUtil     = require('mongodb-uri');
// var options     = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
//                 replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } } };
// var mongodbUri  = process.env.MONGOLAB_URI;
// var mongooseUri = uriUtil.formatMongoose(mongodbUri);
var oneDay = 86400000;

// mongoose.connect(process.env.MONGO_URL || mongooseUri || 'mongodb://localhost/faith_development', options);

var api = express.Router();

app.use(compression());
app.use(bodyparser.json());

app.use('/api', api);
app.use(express.static(path, {maxage: oneDay}));

api.use(function(req, res, next) {
  console.log(req.method, req.url, req.body);
  next();
});

//routes

app.listen(port);
console.log('server started on ' + port);
