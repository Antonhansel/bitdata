//crawler.js
var request = require('request');
var config = require('../config/config.json');

exports.refreshData = function(){
	//get current bitcoin value
	request.get('https://blockchain.info/fr/ticker', function(err, res){
		if (err) console.log(err);
		else stats = res.body;
	});
	//get bitcoin stats
	request.get('https://blockchain.info/fr/stats?format=json', function(err, res){
		if (err) console.log(err);
		else ticker = res.body;
	});
};
