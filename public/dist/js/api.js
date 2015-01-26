var apiResponse;

jQuery(function () {
	$.ajax({
		type: "GET",
		url: '/data',
		success: function(body){
			initMarketCap(body['market-cap']);
		},
	});
});