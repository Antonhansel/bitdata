function initMarketCap(data){
    var categoriesParsed = [];
    var dataParsed = [];
    var date = new Date();

    for (var i = 0; i < data.values.length  - 20; i += 20){
        categoriesParsed.push(data.values[i].x)
        // date.setUTCMilliseconds(data.values[i].y);
        // dataParsed.push(date.toUTCString());
        dataParsed.push(data.values[i].y);
    }
    $('#market-cap').highcharts({
        title: {
            text: 'Bictoin Market Capitalization in USD',
                x: -20 //center
            },
            xAxis: {
                categories: categoriesParsed
            },
            yAxis: {
                title: {
                    text: 'In USD'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '$'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Bitcoin',
                data: dataParsed
            }]
    });
};
