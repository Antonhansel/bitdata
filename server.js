// server.js
var config 		 = require('./lib/config/config.json');
// set up ======================================================================
// get all the tools we need
var express  	 = require('express');
var app      	 = express();
var port     	 = process.env.PORT || 8080;
var morgan       = require('morgan');
var bodyParser   = require('body-parser');
var path 		 = require('path'); 
// Setting bitcoin data refresh
var ticker;
var stats;
var marketCap;

var crawler 	 = require('./lib/app/crawler.js');
crawler.refreshData();
setInterval(function(){
	crawler.refreshData()
}, 60000*1);
// configuration ===============================================================
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser()); // get information from html forms
app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(express.static(path.join(__dirname, 'public'))); // to get local files

// routes ======================================================================
require('./lib/app/routes.js')(app); // load our routes and pass in our app

// launch ======================================================================
app.listen(port);
console.log('Server listening on port ' + port);
