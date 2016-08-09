/*	all web pages with Google Charts should include the following
 *	line in the of the web page to load the Google Chart libraries.
 */
google.charts.load('current', {packages: ['corechart','scatter']});


/*	function to create object of the selected options and call the appropriate function depending on user request.
*/

var prec;
var op; 
function getRequest(){
	//alert(prec);
	if((typeof(prec) && typeof(op)) == "undefined"){
		alert("inside if statement");
		prec = document.getElementById("precision").value;
		op   = document.getElementById("operations").value;
	}//else{alert("else statement");}

	switch(op){
		case "testTry":
			//alert(decbin(340282366920938463463374607431768211456,129 ));
			testAmr(prec);
			break;

		case "addition":
			add(prec);
			break;

		case "subtraction":
			subt(prec);
			break;

		case "multiplication":
			mult(prec);
			break;

		case "division":
			divi(prec);
			break;

		default:
			alert('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'
				+ 'Something went wrong!\n'
				+ 'Please contact the publisher and let the author know about bug.\n'
				+ 'amr11682@hotmail.com');
			break;
	}
}

/*	function to convert (Decimal to Binary) with specify length of the output.
 *	The function take 2 arguments ( dec, length)
 *	dec   : is the decimal number, which need to be convert to binary
 *	length: is the desirable precision 
 *	The function convert positive decimal as well as negative decimal 
 */
function decbin(dec,length){
	var out = "";
	while(length--)
		out += (dec >> length ) & 1;
	return out;
}

/*============================ Test START HERE =========================*/
var mobile = 0;
var halfArr = [4095, 255, 15];

function testAmr(obj){
	var prec  = parseInt(obj);
	// range to iteration (loop)
	var range = Math.pow(2, prec);
	var index = 0;
	var rows  = [];
	for (i = 0; i < range; i += halfArr[mobile]+1 ){
		// initialize dictX
		dictX = {};						

		if(i== 0){
			var formatX = decbin(0, prec);
			// {v:0, f:'0000'}
			var dictX	= {v:0, f: formatX};
		}else{
			var formatX = decbin(i+1, prec);
			var dictX	= {v:i+1, f: formatX};			
		}
	

		for(j=0; j < range; j += halfArr[mobile]){
			// initialize dictY
			var dictY = {};

			if(j== 0){
				var formatY = decbin(0, prec);
			// {v:0, f:'0000'}				
				var dictY = {v:0, f: formatY};
			}else{
				var formatY = decbin(j+1, prec);
				var dictY = {v:j+1, f: formatY};				
			}			


			// correct logic
			// format is:  x index , correct , overflow
			if ((i+j) < range){
				rows[index] = [dictX, dictY, null];
			// else overflow
			}else{
				rows[index] = [dictX, , dictY];
			}
			index += 1;
		}
	}
	alert("Index is :"+index);
	drawChart(rows, ['Overflow']);
}
/*============================ Test END HERE =========================*/

// function to create the simulation of Arithmetics operation ( addition )
function add(obj){
	var prec  = parseInt(obj);
	// range to iteration (loop)
	var range = Math.pow(2, prec);
	var index = 0;
	var rows  = [];
	for (i = 0; i < range; i++){
		var formatX = decbin(i, prec);
		// initialize dictX
		dictX = {};						
		// {v:0, f:'0000'}
		var dictX	= {v:i, f: formatX};
		for(j=0; j < range; j++){
			var formatY = decbin(j, prec);
			// initialize dictY
			var dictY = {};							
			// {v:0, f:'0000'}
			var dictY = {v:j, f: formatY};
			// correct logic
			// format is:  x index , correct , overflow
			if ((i+j) < range){
				rows[index] = [dictX, dictY, null];
			// else overflow
			}else{
				rows[index] = [dictX, , dictY];
			}
			index += 1;
		}
	}

	drawChart(rows, ['Overflow']);
}

// function to create the simulation of Arithmetics operation ( subtraction )
function subt(obj){
	var prec  = parseInt(obj);
	// range to iteration (loop)
	var range = Math.pow(2, prec);
	var index = 0;
	var rows  = [];
	for (i = 0; i < range; i++){
		var formatX = decbin(i, prec);
		// initialize dictX
		dictX = {};						
		// {v:0, f:'0000'}
		var dictX	= {v:i, f: formatX};
		for(j=0; j < range; j++){
			var formatY = decbin(j, prec);
			// initialize dictY
			var dictY = {};							
			// {v:0, f:'0000'}
			var dictY = {v:j, f: formatY};
			// correct logic
			// format is:  x index , correct , overflow
			if ((i-j) >= 0 & (i-j) < range){
				rows[index] = [dictX, dictY, null];
			// else overflow
			}else{
				rows[index] = [dictX, , dictY];
			}
			index += 1;
		}
	}
	
	drawChart(rows, ['Underflow']);
}

// function to create the simulation of Arithmetics operation ( multiplication )
function mult(obj){
	var prec  = parseInt(obj);
	// range to iteration (loop)
	var range = Math.pow(2, prec);
	var index = 0;
	var rows  = [];
	for (i = 0; i < range; i++){
		var formatX = decbin(i, prec);
		// initialize dictX
		dictX = {};						
		// {v:0, f:'0000'}
		var dictX	= {v:i, f: formatX};
		for(j=0; j < range; j++){
			var formatY = decbin(j, prec);
			// initialize dictY
			var dictY = {};							
			// {v:0, f:'0000'}
			var dictY = {v:j, f: formatY};
			// correct logic
			// format is:  x index , correct , overflow
			if ((i*j) < range){
				rows[index] = [dictX, dictY, null];
			// else overflow
			}else{
				rows[index] = [dictX, , dictY];
			}
			index += 1;
		}
	}
	
	drawChart(rows, ['Overflow']);
}

// function to create the simulation of Arithmetics operation ( division )
function divi(obj){
	var prec  = parseInt(obj);
	// range to iteration (loop)
	var range = Math.pow(2, prec);
	var index = 0;
	var rows  = [];
	for (i = 0; i < range; i++){
		var formatX = decbin(i, prec);
		// initialize dictX
		dictX = {};						
		// {v:0, f:'0000'}
		var dictX	= {v:i, f: formatX};
		for(j= 0; j < range; j++){
			var formatY = decbin(j, prec);
			// initialize dictY
			var dictY = {};							
			// {v:0, f:'0000'}
			var dictY = {v:j, f: formatY};
			// correct logic
			if((i/j) % 1 == 0 ){ // does (1/3) which is 0.33.. mod 1  equal to zero 
				rows[index] = [dictX, dictY, null, null];
			// check if is NAN eg. 0/0  or is Infinity(not finite)  eg. 1/0 , 1000/0 
			}else if(isNaN(i/j) || !(isFinite(i/j))){
				rows[index] = [dictX, null, null, dictY];
			// else Inexpressible
			}else{
				rows[index] = [dictX, , dictY, null];
			}
			index += 1;
		}
	}
	drawChart(rows, ['Inexpressible', 'Infinity']);
}

// Declare global variable  
var globalChart;
var globalData;
var globalOptions;

function drawChart(obj, arg) {
	// Define the chart to be drawn. 
	var data = new google.visualization.DataTable();
	data.addColumn('number', '');
	data.addColumn('number', 'correct');
	if (arg.length == 2){
		// numbers do not divide evenly  (Inexpressible) 
		data.addColumn('number', arg[0]);
		// divide by zero
		data.addColumn('number', arg[1]);
	} else{
		data.addColumn('number', arg[0]);
	}
   
   	data.addRows(obj);
    var options = {
    	chart: {
    		title: ' Plotting the simulation of floating point with Basic Arithmetics',
        	subtitle: 'Based on precision 4 bits'
     	},
     	width: 1050,
     	height: 500,
     	explorer: {
     		actions: ['dragToZoom', 'rightClickToReset'],
        	axis: 'horizontal',
        	keepInBounds: true,
        	maxZoomIn: 4.0
    	},
    };
    var chart = new google.charts.Scatter(document.getElementById('chart_div1'));

    // Sign the gloabl variable to chart
    globalChart = chart;
    globalData  = data;
    globalOptions = options;

    chart.draw(data, google.charts.Scatter.convertOptions(options));
 

	// Listen for the 'select' event, and call my function selectHandler() when
	// the user selects something on the chart.

    google.visualization.events.addListener(chart, 'select', selectHandler);

    // This function to get the index of the selected element of chart.
	function selectHandler() {
		var selectedItemRow = chart.getSelection()[0].row;
		var selectedItemCol = chart.getSelection()[0].column;
		if (selectedItemRow != null){
			alert("Index: "+selectedItemRow);
			alert("groupNr: "+selectedItemCol);
			alert("x-axis Value: "+data.getValue(selectedItemRow, 0));
			alert("y-axis Value: "+data.getValue(selectedItemRow, selectedItemCol));
		}
	};
}


















/*
			var value = chart.getValue(selectedItem.row, 0);//, selectedItem.column);
			alert('The user selected ' + value);
*/
			//document.getElementById("test1").innerHTML = glo;



/*
function selectHandler(e) {
  alert('A table row was selected ');//+ chart.getSelection().rows);
}
*/
/*
$('circle').each(function(index,elem){
  
   alert("cx :"+elem.getAttribute("cx")+"...cy :"+elem.getAttribute("cy")); //using JavaScript

}
*/
/*
// Resize function to diffrent midea 
$(window).resize(function(){
  	drawChart();
});

*/