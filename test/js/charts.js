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

/* checkIndex function is to check if the mobile variable has not run out of range. */
function checkIndex(){
	if(mobile < precArr.length){return true;}else{return false;}
}

/* reset function is to reset all the interactive action from user with chart.
 * set the mobile variable to zero index ( the start of precArr )
 */
function reset(){
	mobile = 0;
	getRequest();
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
	var temp = Math.pow(2, document.getElementById("precision").value);

	while((temp / 16) >= 1){
		temp /= 16;
		precArr.push(temp-1); 
	}
	console.log(precArr);
}

/* getBack function provide to the user the previous event of chart. 
 * The function provide event points to the appropriate function (current )
 */

 // Those global variable get thier sign value from drawChart function, only if the user has interacted with chart ( click on (x,y) ). 
var xValue;
var yValue;
function getBack(){
	if(mobile != 0){ mobile -= 1;}else{ mobile = 0;}
	var op   = document.getElementById("operations").value;
	switch(op){
		case "testTry":
			testAmr();//(prec);
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
				+ 'Please contact the publisher and let the author know about the bug.\n'
				+ 'amr11682@hotmail.com');
			break;
	}	
}

// Global variable to save the requested arithmetic operation
var arOp;
/*	getRequest function is to create object of the selected options
 *	and call the appropriate function depending on user request.
 */
function getRequest(){

/*
	//alert(prec);
	if((typeof(prec) && typeof(op)) == "undefined"){
		alert("First call to getRequest function!");
		prec = document.getElementById("precision").value;
		op   = document.getElementById("operations").value;
	}//else{alert("else statement");} */
	//prec = document.getElementById("precision").value;

	var op   = document.getElementById("operations").value;
	switch(op){
		case "testTry":
			testAmr(xValue, yValue);//(prec);
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
				+ 'Please contact the publisher and let the author know about the bug.\n'
				+ 'amr11682@hotmail.com');
			break;
	}
}

/*============================ Test START HERE =========================*/

function testAmr(xValue, yValue){
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
	if((typeof(xValue) && typeof(yValue)) == "undefined"){xV=0; yV=0}else{xV =xValue; yV = yValue;}
	//if((param+height) == range){f2 = decBin(param+height-1, prec);} f2 = decBin(param+height, prec);
	var getFormat = function(param){f1 = decBin(param, prec); f2 = decBin(param+height, prec);}
	//var x = 0
	for(var x = xV, i = 0; i < 16; i++, x += width+1){
		getFormat(x);
		var dictX = {v:x, f:'X: '+f1+' to '+f2};
		//var y = 0
		for(var y = yV, j = 0; j < 16; j++, y += height+1){
			getFormat(y);
			var dictY = {v:y, f:'Y: '+f1+' to '+f2};
			getPixel(x, y, height, width, dictX, dictY);
			index += 1;
		}
	}
	drawChart(rows, ['Overflow', 'Mix']);
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
		var formatX = decBin(i, prec);
		// initialize dictX
		dictX = {};						
		// {v:0, f:'0000'}
		var dictX	= {v:i, f: formatX};
		for(j=0; j < range; j++){
			var formatY = decBin(j, prec);
			// initialize dictY
			dictY = {};							
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
		var formatX = decBin(i, prec);
		// initialize dictX
		dictX = {};						
		// {v:0, f:'0000'}
		var dictX	= {v:i, f: formatX};
		for(j=0; j < range; j++){
			var formatY = decBin(j, prec);
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
		var formatX = decBin(i, prec);
		// initialize dictX
		dictX = {};						
		// {v:0, f:'0000'}
		var dictX	= {v:i, f: formatX};
		for(j=0; j < range; j++){
			var formatY = decBin(j, prec);
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
		var formatX = decBin(i, prec);
		// initialize dictX
		dictX = {};						
		// {v:0, f:'0000'}
		var dictX	= {v:i, f: formatX};
		for(j= 0; j < range; j++){
			var formatY = decBin(j, prec);
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
		mobile += 1;
		var selectedItemRow = chart.getSelection()[0].row;
		var selectedItemCol = chart.getSelection()[0].column;
		if (selectedItemRow != null){
			var xValue = data.getValue(selectedItemRow, 0);
			var yValue = data.getValue(selectedItemRow, selectedItemCol);
			var valid  = checkIndex();

			if(valid){
				testAmr(xValue, yValue);
			}
		}
	};
}









			//alert("Index: "+selectedItemRow);
			//alert("groupNr: "+selectedItemCol);
			//alert("x-axis Value: "+data.getValue(selectedItemRow, 0));
			//alert("y-axis Value: "+data.getValue(selectedItemRow, selectedItemCol));
			//alert(typeof(data.getValue(selectedItemRow, 0)));






		/*
		Oleks logic !
		check(x, y);
		check(x, y + width);
		check(x + height, y);
	    check(x + height, y + width); */


/*
			var value = chart.getValue(selectedItem.row, 0);//, selectedItem.column);
			alert('The user selected ' + value);
*/
			//document.getElementById("test1").innerHTML = glo;

/*
var currentlyPrec;
var currentlyOp; 
function getBack(){
	getRequest(currentlyPrec, currentlyOp)
}
procParam, opParam
	if((typeof(procParam) && typeof(opParam)) == "undefined"){
		op   = document.getElementById("operations").value;

	}
*/

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

/*
var mobile = 0;
var halfArr = [4095, 255, 15];

function testAmr(obj){
	var prec  = parseInt(obj);
	// range to iteration (loop)
	var range = Math.pow(2, prec);
	var index = 0;
	var rows  = [];
	for(x = 0; x < range; x += 4095){

	}
	for (i = 0; i < range; i += 4095 ){ //halfArr[mobile]
		// initialize dictX
		dictX = {};						

		if(i == 0){
			var formatX = decBin(0, prec);
			// {v:0, f:'0000'}
			var dictX	= {v:0, f: formatX};
		}else{
			var formatX = decBin(i, prec);
			var dictX	= {v:i+1, f: formatX};			
		}
	

		for(j=0; j < range; j += 4095 ){ //halfArr[mobile]
			// initialize dictY
			var dictY = {};

			if(j == 0){
				var formatY = decBin(0, prec);
			// {v:0, f:'0000'}				
				var dictY = {v:0, f: formatY};
			}else{
				var formatY = decBin(j, prec);
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
			//j += 1;
		}
		//i += 1;
	}
	alert("Index is :"+index);
	drawChart(rows, ['Overflow']);
}
*/