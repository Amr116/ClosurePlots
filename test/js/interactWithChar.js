

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