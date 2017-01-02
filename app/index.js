var express = require('express');
var db = require('./db');
var bodyParser = require('body-parser');

var app = module.exports = express();
var port = process.env.PORT || 4000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/rs/goal', require('./controllers/Goal'));
// app.use('/rs/entry', require('./controllers/Entry'));

app.use(express.static(__dirname + '/../dist'));

app.listen(port, function(){
    console.log("listening on %d...", port);
});


