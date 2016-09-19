/*	all web pages with Google Charts should include the following
 *	line in the of the web page to load the Google Chart libraries.
 */
google.charts.load('current', {packages: ['corechart','scatter']});


/*	decBin function is to convert (Decimal to Binary) with specify length of the output.
 *	The function take 2 arguments ( dec, length)
 *	dec   : is the decimal number, which need to be convert to binary
 *	length: is the desirable precision 
 *	The function convert positive decimal as well as negative decimal 
 */
function decBin(dec,length){
	var out = "";
	while(length--)
		out += (dec >> length ) & 1;
	return out;
}

/* checkIndex function is to check if the mobile variable has not run out of range to precArr length. */
function checkIndex(){
	if(mobile < precArr.length){return true;}else{return false;}
}

/* reset function is to reset all the interactive action from user with chart.
 * set the mobile variable to zero index ( the start of precArr )
 */
function reset(){
	mobile = 0;
	xValue = null;
	yValue = null;
	clickIndex = 0;
}

/* getPrecision Function is to create array of the different dimensional to chart.
 * The function has to reset mobile variable to zero, which will point to the start of precArr.
 * The function will be execute onload of the body tag and when a user changes the selected option of a <select> element.
 */
var mobile = 0;
var precArr = [];

function getPrecision(){
	precArr = [];
	mobile  = 0;
	var temp= Math.pow(2, document.getElementById("precision").value);

	while((temp / 16) >= 1){
		temp /= 16;
		precArr.push(temp-1); 
	}
	console.log(precArr);
}


// Declare global variable, which will get their value from drawChart function, 
// only if the user has interacted with chart ( click on (x,y) ). 
var xValue = null;
var yValue = null;

var clickedX = [];
var clickedY = [];
var clickIndex = 0;

/* getBack function provide to the user the previous event of chart. 
 * The function provide event points to the appropriate function (current )
 */
function getBack(){
	if(mobile != 0){ mobile -= 1;}else{ mobile = 0;}

	if(clickIndex == 0 || clickIndex == 1){
		xValue= null;
		yValue=null;
		clickIndex = 0;
	}else{
		clickIndex -= 1;
		xValue=clickedX[clickIndex-1]; 
		yValue=clickedY[clickIndex-1];
		
	}
	getRequest();
}

/*	getRequest function is to create object of the selected options
 *	and call the appropriate function depending on user request.
 */
function getRequest(){
	var op = document.getElementById("operations").value;
	switch(op){
		case "addition":
			add();
			break;
		case "subtraction":
			sub();
			break;
		case "multiplication":
			mult();
			break;
		case "division":
			divi();
			break;
		default:
			alert('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'
				+ 'Something went wrong!\n'
				+ 'Please contact the publisher and let the author know about the bug.\n'
				+ 'amr11682@hotmail.com');
			break;
	}
}

// function to create the simulation of Arithmetics operation ( addition )
function add(){
	var prec  = parseInt(document.getElementById("precision").value);

	var range = Math.pow(2, prec);

	var height= precArr[mobile];
	var width = precArr[mobile];

	var index = 0;
	var rows  = [];

	var f1; // axis data format 
	var f2; // axis data format

	var getPixel = function(x, y, height, width, dictX, dictY) {
		var correct = 0;
		var overflow = 0;
		
		var check = function(x,y) {
			if (x + y < range) { correct += 1; } else { overflow += 1; }	
		}
	    check(x, y);
		check(x, y + height);
		check(x + width, y);
	    check(x + width, y + height);
        console.log(x,y,correct, overflow, dictX, dictY, index);
	    if (correct > 0 && overflow == 0) {
	    	// Correct data
			rows[index] = [dictX, dictY, null, null];

		} else if(overflow > 0 && correct == 0) {
			// Overflow data
			rows[index] = [dictX, null, dictY, null];

		} else {
			// Mix data
			rows[index] = [dictX, null, null, dictY];
		}
	}
	var xV;
	var yV; 
	if(xValue == null && yValue == null){xV=0; yV=0;}else{xV = xValue; yV = yValue;}
	if(clickIndex > 0){clickedX.push(xV);clickedY.push(yV);}
	
	var getFormat = function(param){f1 = decBin(param, prec); f2 = decBin(param+height, prec);}
	//var x = 0
	for(var x = xV, i = 0; i < 16; i++, x += width+1){
		getFormat(x);
		var dictX = {v:x, f:'X: '+f1+' - '+f2};
		//var y = 0
		for(var y = yV, j = 0; j < 16; j++, y += height+1){
			getFormat(y);
			var dictY = {v:y, f:'Y: '+f1+' - '+f2};
			getPixel(x, y, height, width, dictX, dictY);
			index += 1;
		}
	}
	drawChart(rows, ['Overflow', 'Mix']);
}

// function to create the simulation of Arithmetics operation ( subtraction )
function sub(){//xValue, yValue){
	var prec  = parseInt(document.getElementById("precision").value);
	// range to iteration (loop)
	var range = Math.pow(2, prec);

	var height= precArr[mobile];
	var width = precArr[mobile];

	var index = 0;
	var rows  = [];

	var f1; // axis data format 
	var f2; // axis data format

	var getPixel = function(x, y, height, width, dictX, dictY) {
		var correct = 0;
		var underflow = 0;

		var check = function(x,y) {
			if ((x - y) >=0 && (x - y) < range) { correct += 1; } else { underflow += 1; }	
		}
	    check(x, y);
		check(x, y + height);
		check(x + width, y);
	    check(x + width, y + height);
        console.log(x,y,correct, underflow, dictX, dictY, index);
	    if (correct > 0 && underflow == 0) {
	    	// Correct data
			rows[index] = [dictX, dictY, null, null];

		} else if(underflow > 0 && correct == 0) {
			// Overflow data
			rows[index] = [dictX, null, dictY, null];

		} else {
			// Mix data
			rows[index] = [dictX, null, null, dictY];
		}
	}
	var xV;
	var yV; 
	if(xValue == null && yValue == null){xV=0; yV=0;}else{xV = xValue; yV = yValue;}
	if(clickIndex > 0){clickedX.push(xV);clickedY.push(yV);}
	
	var getFormat = function(param){f1 = decBin(param, prec); f2 = decBin(param+height, prec);}
	//var x = 0
	for(var x = xV, i = 0; i < 16; i++, x += width+1){
		getFormat(x);
		var dictX = {v:x, f:'X: '+f1+' - '+f2};
		//var y = 0
		for(var y = yV, j = 0; j < 16; j++, y += height+1){
			getFormat(y);
			var dictY = {v:y, f:'Y: '+f1+' - '+f2};
			getPixel(x, y, height, width, dictX, dictY);
			index += 1;
		}
	}
	drawChart(rows, ['Underflow', 'Mix']);
}

// function to create the simulation of Arithmetics operation ( multiplication )
function mult(){//xValue, yValue){
	var prec  = parseInt(document.getElementById("precision").value);
	// range to iteration (loop)
	var range = Math.pow(2, prec);

	var height= precArr[mobile];
	var width = precArr[mobile];

	var index = 0;
	var rows  = [];

	var f1; // axis data format 
	var f2; // axis data format

	var getPixel = function(x, y, height, width, dictX, dictY) {
		var correct = 0;
		var overflow = 0;

		var check = function(x,y) {
			if (x * y < range) { correct += 1; } else { overflow += 1; }	
		}
	    check(x, y);
		check(x, y + height);
		check(x + width, y);
	    check(x + width, y + height);
        console.log(x,y,correct, overflow, dictX, dictY, index);
	    if (correct > 0 && overflow == 0) {
	    	// Correct data
			rows[index] = [dictX, dictY, null, null];

		} else if(overflow > 0 && correct == 0) {
			// Overflow data
			rows[index] = [dictX, null, dictY, null];

		} else {
			// Mix data
			rows[index] = [dictX, null, null, dictY];
		}
	}
	var xV;
	var yV; 
	if(xValue == null && yValue == null){xV=0; yV=0;}else{xV = xValue; yV = yValue;}
	if(clickIndex > 0){clickedX.push(xV);clickedY.push(yV);}
	
	var getFormat = function(param){f1 = decBin(param, prec); f2 = decBin(param+height, prec);}
	
	for(var x = xV, i = 0; i < 16; i++, x += width+1){
		getFormat(x);
		var dictX = {v:x, f:'X: '+f1+' - '+f2};
		//var y = 0
		for(var y = yV, j = 0; j < 16; j++, y += height+1){
			getFormat(y);
			var dictY = {v:y, f:'Y: '+f1+' - '+f2};
			getPixel(x, y, height, width, dictX, dictY);
			index += 1;
		}
	}
	drawChart(rows, ['Overflow', 'Mix']);
}

// function to create the simulation of Arithmetics operation ( division )
function divi(){//xValue, yValue){
	var prec  = parseInt(document.getElementById("precision").value);
	// range to iteration (loop)
	var range = Math.pow(2, prec);

	var height= precArr[mobile];
	var width = precArr[mobile];

	var index = 0;
	var rows  = [];

	var f1; // axis data format 
	var f2; // axis data format

	var getPixel = function(x, y, height, width, dictX, dictY) {
		var correct = 0;
		var infi    = 0;
		var Inexpressible = 0;

		var check = function(x,y) {
			if ((x/y) % 1 == 0) { correct += 1; }else if(isNaN(x/y) || !(isFinite(x/y))) { infi += 1;}else{ Inexpressible += 1; }	
		}
	    check(x, y);
		check(x, y + height);
		check(x + width, y);
	    check(x + width, y + height);
        console.log(x,y,correct, Inexpressible, infi, dictX, dictY, index);
	    if (correct > 0 && Inexpressible == 0 && infi == 0) {
	    	// Correct data: does (1/3) which is 0.33.. mod 1  equal to zero
			rows[index] = [dictX, dictY, null, null, null];

		} else if(Inexpressible > 0 && correct == 0 && infi == 0) {
			// Inexpressible data
			rows[index] = [dictX, null, dictY, null, null];

		}else if(infi > 0 && correct == 0 && Inexpressible == 0) {
			// check if is NAN eg. 0/0  or is Infinity(not finite)  eg. 1/0 , 1000/0
			rows[index] = [dictX, null, null, dictY, null];

		} else {
			// Mix data
			rows[index] = [dictX, null, null, null, dictY];
		}
	}
	var xV;
	var yV; 
	if(xValue == null && yValue == null){xV=0; yV=0;}else{xV = xValue; yV = yValue;}
	if(clickIndex > 0){clickedX.push(xV);clickedY.push(yV);}
	
	var getFormat = function(param){f1 = decBin(param, prec); f2 = decBin(param+height, prec);}
	
	for(var x = xV, i = 0; i < 16; i++, x += width+1){
		getFormat(x);
		var dictX = {v:x, f:'X: '+f1+' - '+f2};
	
		for(var y = yV, j = 0; j < 16; j++, y += height+1){
			getFormat(y);
			var dictY = {v:y, f:'Y: '+f1+' - '+f2};
			getPixel(x, y, height, width, dictX, dictY);
			index += 1;
		}
	}                                 //divide by zero
	drawChart(rows, ['Inexpressible', 'infinity','Mix']);
}


function drawChart(arg1, arg2) {
	// Define the chart to be drawn. 
	var data = new google.visualization.DataTable();
	data.addColumn('number', '');
	data.addColumn('number', 'correct');
	if (arg2.length == 3){
		// numbers do not divide evenly  (Inexpressible) 
		data.addColumn('number', arg2[0]);
		// divide by zero
		data.addColumn('number', arg2[1]);
		// Mixed
		data.addColumn('number', arg2[2]);
	} else{
		// Overflow or Underflow
		data.addColumn('number', arg2[0]);
		// Mixed
		data.addColumn('number', arg2[1]);
	}
   
   	data.addRows(arg1);
    var options = {
    	chart: {
    		title: ' Plotting the behaviour of floating point with Basic Arithmetics',
        	//subtitle: 'Based on precision 4 bits'
     	},
     	width: 1150,
     	height: 500,
     	explorer: {
     		actions: ['dragToZoom', 'rightClickToReset'],
        	axis: 'horizontal',
        	keepInBounds: true,
        	maxZoomIn: 4.0
    	},
    };
    var chart = new google.charts.Scatter(document.getElementById('chart_div1'));

    chart.draw(data, google.charts.Scatter.convertOptions(options));
 

	// Listen for the 'select' event, and call my function selectHandler() when
	// the user selects something on the chart.

    google.visualization.events.addListener(chart, 'select', selectHandler);

    // This function to get the index of the selected element of chart.
	function selectHandler() {

		mobile += 1;

		var selectedItemRow = chart.getSelection()[0].row;
		var selectedItemCol = chart.getSelection()[0].column;

		if (selectedItemRow != null){

			xValue = data.getValue(selectedItemRow, 0);
			yValue = data.getValue(selectedItemRow, selectedItemCol);

			var valid  = checkIndex();

			if(valid){
				clickIndex += 1;
				getRequest();
			}
		}
	};
}
