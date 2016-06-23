/**
 * Created by jed on 6/22/2016.
 */

//app server
//bring in dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set path where static files will be served
app.use(express.static(path.resolve(__dirname, 'client')));

//set app engine and where we will be server our views from
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'client', 'views'));

//set home view
app.get('/', function (req, res) {
    res.render('index.html');
});

//api route
app.use('/teamsAPI', require('./server/controllers/teamsAPI'));

//connect to server when a connection to the database is made
mongoose.connect('mongodb://localhost/LupusSpiel');
mongoose.connection.on('open', function () {
    app.listen(3000);
    console.log("lcurl is running on port 3000");
});
