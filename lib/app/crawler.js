//crawler.js
var request = require('request');
var config = require('../config/config.json');

exports.refreshData = function(){
	console.log('Refreshing data...');
	request.get('https://blockchain.info/charts/market-cap?format=json', function(err, res){
		if (err) console.log(err);
		else marketCap = JSON.parse(res.body);
	});
	//get current bitcoin value
	request.get('https://blockchain.info/fr/ticker', function(err, res){
		if (err) console.log(err);
		else stats = JSON.parse(res.body);
	});
	//get bitcoin stats
	request.get('https://blockchain.info/fr/stats?format=json', function(err, res){
		if (err) console.log(err);
		else ticker = JSON.parse(res.body);
	});
};
