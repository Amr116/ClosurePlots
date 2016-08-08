

var clickedOn = 0;


function countDown(){
	clickedOn += 1;
}

function resetCounter(){
	clickedOn = 0;
}

function printResult(){
	document.getElementById("test1").innerHTML = clickedOn;
}

function overLoop(){
	var data = [];
	for(i = 0; i< 1000000; i++){
		data.push({x: i});
	}
	document.getElementById("test1").innerHTML = data;
}
//globalData, globalChart, globalOptions
function firstStage(){
//	var data = new google.visualization.DataTable();
	var data = globalData;
	//var chart = globalChart;
	var options = globalOptions;

	//var data = new google.visualization.DataTable();
	var chart = new google.charts.Scatter(document.getElementById('test1'));
	chart.draw(data, google.charts.Scatter.convertOptions(options));
}

function toFixed(x) {
    var result = '';
    var xStr = x.toString(10);
    var digitCount = xStr.indexOf('e') === -1 ? xStr.length : (parseInt(xStr.substr(xStr.indexOf('e') + 1)) + 1);

    for (var i = 1; i <= digitCount; i++) {
        var mod = (x % Math.pow(10, i)).toString(10);
        var exponent = (mod.indexOf('e') === -1) ? 0 : parseInt(mod.substr(mod.indexOf('e')+1));
        if ((exponent === 0 && mod.length !== i) || (exponent > 0 && exponent !== i-1)) {
            result = '0' + result;
        }
        else {
            result = mod.charAt(0) + result;
        }
    }
    return result;
}