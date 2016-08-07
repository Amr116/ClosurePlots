
// function to create object of the selected options and call the appropriate function. 
function myFunction(){
	var prec = document.getElementById("precision").value;
	var op   = document.getElementById("operations").val
	switch(op){
		case "addition":
			add(prec);
			//alert("add op");
			break;
		case "subtraction":
			subt(prec);
			//alert("sub op");
			break;
		case "multiplication":
			mult(prec);
			//alert("mul op");
			break;
		case "division":
			divi(prec);
			//alert("div op");
			break;
		default:
			alert("something wrong");
			break;
	}
}

				
// function to convert (Decimal to Binary) with specify length of the output.
function decbin(dec,length){
	var out = "";
	while(length--)
		out += (dec >> length ) & 1;
	return out;
}



// function to create the simulation of Arithmetics operation ( addition )
function add(obj){
	var prec  = parseInt(obj);
	// range to iteration (loop)
	var range = Math.pow(2, pre
	var index = 0;
	var rows  = 
	for (i = 0; i < range; i++){
		var formatX = decbin(i, prec);
		// initialize dictX
		dictX = {};						
		// {v:0, f:'0000'}
		var dictX	= {v:i, f: format
		for(j=0; j < range; j++){
			var formatY = decbin(j, prec);
			// initialize dictY
			var dictY = {};							
			// {v:0, f:'0000'}
			var dictY = {v:j, f: formatY};
			// correct logic
			// format is:  x index , correct , overflow
			if ((i+j) < range){
				rows[index] = [dictX, dictY, nul
			// else overflow
			}else{
				rows[index] = [dictX, , dictY];
	
			index += 1;

	}
	//document.getElementById("test1").innerHTML = rows;
	drawChart(rows, ['Overflow']);
}

// function to create the simulation of Arithmetics operation ( subtraction )
function subt(obj){
	var prec  = parseInt(obj);
	// range to iteration (loop)
	var range = Math.pow(2, pre
	var index = 0;
	var rows  = 
	for (i = 0; i < range; i++){
		var formatX = decbin(i, prec);
		// initialize dictX
		dictX = {};						
		// {v:0, f:'0000'}
		var dictX	= {v:i, f: format
		for(j=0; j < range; j++){
			var formatY = decbin(j, prec);
			// initialize dictY
			var dictY = {};							
			// {v:0, f:'0000'}
			var dictY = {v:j, f: formatY};
			// correct logic
			// format is:  x index , correct , overflow
			if ((i-j) >= 0 & (i-j) < range){
				rows[index] = [dictX, dictY, nul
			// else overflow
			}else{
				rows[index] = [dictX, , dictY];
	
			index += 1;

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
			}else {
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
     	//width: 1050,
     	//height: 500,
     	explorer: {
     		actions: ['dragToZoom', 'rightClickToReset'],
        	axis: 'horizontal',
        	keepInBounds: true,
        	maxZoomIn: 4.0
    	},
    };
    var chart = new google.charts.Scatter(document.getElementById('test1'));
    chart.draw(data, google.charts.Scatter.convertOptions(options));
}


// Function to able responsive view to the page
$(window).resize(function(){
	drawChart();
});
