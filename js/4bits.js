function draw1() {
   // Define the chart to be drawn.
   var data = new google.visualization.DataTable();
   data.addColumn('number', '');
   data.addColumn('number', 'limited');
   data.addColumn('number', 'overflow');
   data.addRows([
    [{v:0, f:'0000'}, {v:0, f:'0000'},null],
    [{v:0, f:'0000'}, {v:1, f:'0001'},null],
    [{v:0, f:'0000'}, {v:2, f:'0010'},null],
    [{v:0, f:'0000'}, {v:3, f:'0011'},null],
    [{v:0, f:'0000'}, {v:4, f:'0100'},null],
    [{v:0, f:'0000'}, {v:5, f:'0101'},null],
    [{v:0, f:'0000'}, {v:6, f:'0110'},null],
    [{v:0, f:'0000'}, {v:7, f:'0111'},null],
    [{v:0, f:'0000'}, {v:8, f:'1000'},null],
    [{v:0, f:'0000'}, {v:9, f:'1001'},null],
    [{v:0, f:'0000'}, {v:10, f:'1010'},null],
    [{v:0, f:'0000'}, {v:11, f:'1011'},null],
    [{v:0, f:'0000'}, {v:12, f:'1100'},null],
    [{v:0, f:'0000'}, {v:13, f:'1101'},null],
    [{v:0, f:'0000'}, {v:14, f:'1110'},null],
    [{v:0, f:'0000'}, {v:15, f:'1111'},null],

    [{v:1, f:'0001'}, {v:0, f:'0000'},null],
    [{v:1, f:'0001'}, {v:1, f:'0001'},null],
    [{v:1, f:'0001'}, {v:2, f:'0010'},null],
    [{v:1, f:'0001'}, {v:3, f:'0011'},null],
    [{v:1, f:'0001'}, {v:4, f:'0100'},null],
    [{v:1, f:'0001'}, {v:5, f:'0101'},null],
    [{v:1, f:'0001'}, {v:6, f:'0110'}, null],
    [{v:1, f:'0001'}, {v:7, f:'0111'},null],
    [{v:1, f:'0001'}, {v:8, f:'1000'},null],
    [{v:1, f:'0001'}, {v:9, f:'1001'},null],
    [{v:1, f:'0001'}, {v:10, f:'1010'},null],
    [{v:1, f:'0001'}, {v:11, f:'1011'},null],
    [{v:1, f:'0001'}, {v:12, f:'1100'},null],
    [{v:1, f:'0001'}, {v:13, f:'1101'},null],
    [{v:1, f:'0001'}, {v:14, f:'1110'}, null],
    [{v:1, f:'0001'}, ,{v:15, f:'1111'}],

    [{v:2, f:'0010'}, {v:0, f:'0000'},null],
    [{v:2, f:'0010'}, {v:1, f:'0001'},null],
    [{v:2, f:'0010'}, {v:2, f:'0010'},null],
    [{v:2, f:'0010'}, {v:3, f:'0011'},null],
    [{v:2, f:'0010'}, {v:4, f:'0100'},null],
    [{v:2, f:'0010'}, {v:5, f:'0101'},null],
    [{v:2, f:'0010'}, {v:6, f:'0110'},null],
    [{v:2, f:'0010'}, {v:7, f:'0111'},null],
    [{v:2, f:'0010'}, {v:8, f:'1000'},null],
    [{v:2, f:'0010'}, {v:9, f:'1001'},null],
    [{v:2, f:'0010'}, {v:10, f:'1010'},null],
    [{v:2, f:'0010'}, {v:11, f:'1011'},null],
    [{v:2, f:'0010'}, {v:12, f:'1100'},null],
    [{v:2, f:'0010'}, {v:13, f:'1101'},null],
    [{v:2, f:'0010'}, ,{v:14, f:'1110'}],
    [{v:2, f:'0010'}, ,{v:15, f:'1111'}],

    [{v:3, f:'0011'}, {v:0, f:'0000'},null],
    [{v:3, f:'0011'}, {v:1, f:'0001'},null],
    [{v:3, f:'0011'}, {v:2, f:'0010'},null],
    [{v:3, f:'0011'}, {v:3, f:'0011'},null],
    [{v:3, f:'0011'}, {v:4, f:'0100'},null],
    [{v:3, f:'0011'}, {v:5, f:'0101'},null],
    [{v:3, f:'0011'}, {v:6, f:'0110'},null],
    [{v:3, f:'0011'}, {v:7, f:'0111'},null],
    [{v:3, f:'0011'}, {v:8, f:'1000'},null],
    [{v:3, f:'0011'}, {v:9, f:'1001'},null],
    [{v:3, f:'0011'}, {v:10, f:'1010'},null],
    [{v:3, f:'0011'}, {v:11, f:'1011'},null],
    [{v:3, f:'0011'}, {v:12, f:'1100'},null],
    [{v:3, f:'0011'}, ,{v:13, f:'1101'}],
    [{v:3, f:'0011'}, ,{v:14, f:'1110'}],
    [{v:3, f:'0011'}, ,{v:15, f:'1111'}],

    [{v:4, f:'0100'}, {v:0, f:'0000'},null],
    [{v:4, f:'0100'}, {v:1, f:'0001'},null],
    [{v:4, f:'0100'}, {v:2, f:'0010'},null],
    [{v:4, f:'0100'}, {v:3, f:'0011'},null],
    [{v:4, f:'0100'}, {v:4, f:'0100'},null],
    [{v:4, f:'0100'}, {v:5, f:'0101'},null],
    [{v:4, f:'0100'}, {v:6, f:'0110'},null],
    [{v:4, f:'0100'}, {v:7, f:'0111'},null],
    [{v:4, f:'0100'}, {v:8, f:'1000'},null],
    [{v:4, f:'0100'}, {v:9, f:'1001'},null],
    [{v:4, f:'0100'}, {v:10, f:'1010'},null],
    [{v:4, f:'0100'}, {v:11, f:'1011'},null],
    [{v:4, f:'0100'}, ,{v:12, f:'1100'}],
    [{v:4, f:'0100'}, ,{v:13, f:'1101'}],
    [{v:4, f:'0100'}, ,{v:14, f:'1110'}],
    [{v:4, f:'0100'}, ,{v:15, f:'1111'}],

    [{v:5, f:'0101'}, {v:0, f:'0000'},null],
    [{v:5, f:'0101'}, {v:1, f:'0001'},null],
    [{v:5, f:'0101'}, {v:2, f:'0010'},null],
    [{v:5, f:'0101'}, {v:3, f:'0011'},null],
    [{v:5, f:'0101'}, {v:4, f:'0100'},null],
    [{v:5, f:'0101'}, {v:5, f:'0101'},null],
    [{v:5, f:'0101'}, {v:6, f:'0110'},null],
    [{v:5, f:'0101'}, {v:7, f:'0111'},null],
    [{v:5, f:'0101'}, {v:8, f:'1000'},null],
    [{v:5, f:'0101'}, {v:9, f:'1001'},null],
    [{v:5, f:'0101'}, {v:10, f:'1010'},null],
    [{v:5, f:'0101'}, ,{v:11, f:'1011'}],
    [{v:5, f:'0101'}, ,{v:12, f:'1100'}],
    [{v:5, f:'0101'}, ,{v:13, f:'1101'}],
    [{v:5, f:'0101'}, ,{v:14, f:'1110'}],
    [{v:5, f:'0101'}, ,{v:15, f:'1111'}],

    [{v:6, f:'0110'}, {v:0, f:'0000'},null],
    [{v:6, f:'0110'}, {v:1, f:'0001'},null],
    [{v:6, f:'0110'}, {v:2, f:'0010'},null],
    [{v:6, f:'0110'}, {v:3, f:'0011'},null],
    [{v:6, f:'0110'}, {v:4, f:'0100'},null],
    [{v:6, f:'0110'}, {v:5, f:'0101'},null],
    [{v:6, f:'0110'}, {v:6, f:'0110'},null],
    [{v:6, f:'0110'}, {v:7, f:'0111'},null],
    [{v:6, f:'0110'}, {v:8, f:'1000'},null],
    [{v:6, f:'0110'}, {v:9, f:'1001'},null],
    [{v:6, f:'0110'}, ,{v:10, f:'1010'}],
    [{v:6, f:'0110'}, ,{v:11, f:'1011'}],
    [{v:6, f:'0110'}, ,{v:12, f:'1100'}],
    [{v:6, f:'0110'}, ,{v:13, f:'1101'}],
    [{v:6, f:'0110'}, ,{v:14, f:'1110'}],
    [{v:6, f:'0110'}, ,{v:15, f:'1111'}],

    [{v:7, f:'0111'}, {v:0, f:'0000'},null],
    [{v:7, f:'0111'}, {v:1, f:'0001'},null],
    [{v:7, f:'0111'}, {v:2, f:'0010'},null],
    [{v:7, f:'0111'}, {v:3, f:'0011'},null],
    [{v:7, f:'0111'}, {v:4, f:'0100'},null],
    [{v:7, f:'0111'}, {v:5, f:'0101'},null],
    [{v:7, f:'0111'}, {v:6, f:'0110'},null],
    [{v:7, f:'0111'}, {v:7, f:'0111'},null],
    [{v:7, f:'0111'}, {v:8, f:'1000'},null],
    [{v:7, f:'0111'}, ,{v:9, f:'1001'}],
    [{v:7, f:'0111'}, ,{v:10, f:'1010'}],
    [{v:7, f:'0111'}, ,{v:11, f:'1011'}],
    [{v:7, f:'0111'}, ,{v:12, f:'1100'}],
    [{v:7, f:'0111'}, ,{v:13, f:'1101'}],
    [{v:7, f:'0111'}, ,{v:14, f:'1110'}],
    [{v:7, f:'0111'}, ,{v:15, f:'1111'}],

    [{v:8, f:'1000'}, {v:0, f:'0000'},null],
    [{v:8, f:'1000'}, {v:1, f:'0001'},null],
    [{v:8, f:'1000'}, {v:2, f:'0010'},null],
    [{v:8, f:'1000'}, {v:3, f:'0011'},null],
    [{v:8, f:'1000'}, {v:4, f:'0100'},null],
    [{v:8, f:'1000'}, {v:5, f:'0101'},null],
    [{v:8, f:'1000'}, {v:6, f:'0110'},null],
    [{v:8, f:'1000'}, {v:7, f:'0111'},null],
    [{v:8, f:'1000'}, ,{v:8, f:'1000'}],
    [{v:8, f:'1000'}, ,{v:9, f:'1001'}],
    [{v:8, f:'1000'}, ,{v:10, f:'1010'}],
    [{v:8, f:'1000'}, ,{v:11, f:'1011'}],
    [{v:8, f:'1000'}, ,{v:12, f:'1100'}],
    [{v:8, f:'1000'}, ,{v:13, f:'1101'}],
    [{v:8, f:'1000'}, ,{v:14, f:'1110'}],
    [{v:8, f:'1000'}, ,{v:15, f:'1111'}],

    [{v:9, f:'1001'}, {v:0, f:'0000'},null],
    [{v:9, f:'1001'}, {v:1, f:'0001'},null],
    [{v:9, f:'1001'}, {v:2, f:'0010'},null],
    [{v:9, f:'1001'}, {v:3, f:'0011'},null],
    [{v:9, f:'1001'}, {v:4, f:'0100'},null],
    [{v:9, f:'1001'}, {v:5, f:'0101'},null],
    [{v:9, f:'1001'}, {v:6, f:'0110'},null],
    [{v:9, f:'1001'}, ,{v:7, f:'0111'}],
    [{v:9, f:'1001'}, ,{v:8, f:'1000'}],
    [{v:9, f:'1001'}, ,{v:9, f:'1001'}],
    [{v:9, f:'1001'}, ,{v:10, f:'1010'}],
    [{v:9, f:'1001'}, ,{v:11, f:'1011'}],
    [{v:9, f:'1001'}, ,{v:12, f:'1100'}],
    [{v:9, f:'1001'}, ,{v:13, f:'1101'}],
    [{v:9, f:'1001'}, ,{v:14, f:'1110'}],
    [{v:9, f:'1001'}, ,{v:15, f:'1111'}],

    [{v:10, f:'1010'}, {v:0, f:'0000'},null],
    [{v:10, f:'1010'}, {v:1, f:'0001'},null],
    [{v:10, f:'1010'}, {v:2, f:'0010'},null],
    [{v:10, f:'1010'}, {v:3, f:'0011'},null],
    [{v:10, f:'1010'}, {v:4, f:'0100'},null],
    [{v:10, f:'1010'}, {v:5, f:'0101'},null],
    [{v:10, f:'1010'}, ,{v:6, f:'0110'}],
    [{v:10, f:'1010'}, ,{v:7, f:'0111'}],
    [{v:10, f:'1010'}, ,{v:8, f:'1000'}],
    [{v:10, f:'1010'}, ,{v:9, f:'1001'}],
    [{v:10, f:'1010'}, ,{v:10, f:'1010'}],
    [{v:10, f:'1010'}, ,{v:11, f:'1011'}],
    [{v:10, f:'1010'}, ,{v:12, f:'1100'}],
    [{v:10, f:'1010'}, ,{v:13, f:'1101'}],
    [{v:10, f:'1010'}, ,{v:14, f:'1110'}],
    [{v:10, f:'1010'}, ,{v:15, f:'1111'}],

    [{v:11, f:'1011'}, {v:0, f:'0000'},null],
    [{v:11, f:'1011'}, {v:1, f:'0001'},null],
    [{v:11, f:'1011'}, {v:2, f:'0010'},null],
    [{v:11, f:'1011'}, {v:3, f:'0011'},null],
    [{v:11, f:'1011'}, {v:4, f:'0100'},null],
    [{v:11, f:'1011'}, ,{v:5, f:'0101'}],
    [{v:11, f:'1011'}, ,{v:6, f:'0110'}],
    [{v:11, f:'1011'}, ,{v:7, f:'0111'}],
    [{v:11, f:'1011'}, ,{v:8, f:'1000'}],
    [{v:11, f:'1011'}, ,{v:9, f:'1001'}],
    [{v:11, f:'1011'}, ,{v:10, f:'1010'}],
    [{v:11, f:'1011'}, ,{v:11, f:'1011'}],
    [{v:11, f:'1011'}, ,{v:12, f:'1100'}],
    [{v:11, f:'1011'}, ,{v:13, f:'1101'}],
    [{v:11, f:'1011'}, ,{v:14, f:'1110'}],
    [{v:11, f:'1011'}, ,{v:15, f:'1111'}],

    [{v:12, f:'1100'}, {v:0, f:'0000'},null],
    [{v:12, f:'1100'}, {v:1, f:'0001'},null],
    [{v:12, f:'1100'}, {v:2, f:'0010'},null],
    [{v:12, f:'1100'}, {v:3, f:'0011'},null],
    [{v:12, f:'1100'}, ,{v:4, f:'0100'}],
    [{v:12, f:'1100'}, ,{v:5, f:'0101'}],
    [{v:12, f:'1100'}, ,{v:6, f:'0110'}],
    [{v:12, f:'1100'}, ,{v:7, f:'0111'}],
    [{v:12, f:'1100'}, ,{v:8, f:'1000'}],
    [{v:12, f:'1100'}, ,{v:9, f:'1001'}],
    [{v:12, f:'1100'}, ,{v:10, f:'1010'}],
    [{v:12, f:'1100'}, ,{v:11, f:'1011'}],
    [{v:12, f:'1100'}, ,{v:12, f:'1100'}],
    [{v:12, f:'1100'}, ,{v:13, f:'1101'}],
    [{v:12, f:'1100'}, ,{v:14, f:'1110'}],
    [{v:12, f:'1100'}, ,{v:15, f:'1111'}],

    [{v:13, f:'1101'}, {v:0, f:'0000'},null],
    [{v:13, f:'1101'}, {v:1, f:'0001'},null],
    [{v:13, f:'1101'}, {v:2, f:'0010'},null],
    [{v:13, f:'1101'}, ,{v:3, f:'0011'}],
    [{v:13, f:'1101'}, ,{v:4, f:'0100'}],
    [{v:13, f:'1101'}, ,{v:5, f:'0101'}],
    [{v:13, f:'1101'}, ,{v:6, f:'0110'}],
    [{v:13, f:'1101'}, ,{v:7, f:'0111'}],
    [{v:13, f:'1101'}, ,{v:8, f:'1000'}],
    [{v:13, f:'1101'}, ,{v:9, f:'1001'}],
    [{v:13, f:'1101'}, ,{v:10, f:'1010'}],
    [{v:13, f:'1101'}, ,{v:11, f:'1011'}],
    [{v:13, f:'1101'}, ,{v:12, f:'1100'}],
    [{v:13, f:'1101'}, ,{v:13, f:'1101'}],
    [{v:13, f:'1101'}, ,{v:14, f:'1110'}],
    [{v:13, f:'1101'}, ,{v:15, f:'1111'}],

    [{v:14, f:'1110'}, {v:0, f:'0000'},null],
    [{v:14, f:'1110'}, {v:1, f:'0001'},null],
    [{v:14, f:'1110'}, ,{v:2, f:'0010'}],
    [{v:14, f:'1110'}, ,{v:3, f:'0011'}],
    [{v:14, f:'1110'}, ,{v:4, f:'0100'}],
    [{v:14, f:'1110'}, ,{v:5, f:'0101'}],
    [{v:14, f:'1110'}, ,{v:6, f:'0110'}],
    [{v:14, f:'1110'}, ,{v:7, f:'0111'}],
    [{v:14, f:'1110'}, ,{v:8, f:'1000'}],
    [{v:14, f:'1110'}, ,{v:9, f:'1001'}],
    [{v:14, f:'1110'}, ,{v:10, f:'1010'}],
    [{v:14, f:'1110'}, ,{v:11, f:'1011'}],
    [{v:14, f:'1110'}, ,{v:12, f:'1100'}],
    [{v:14, f:'1110'}, ,{v:13, f:'1101'}],
    [{v:14, f:'1110'}, ,{v:14, f:'1110'}],
    [{v:14, f:'1110'}, ,{v:15, f:'1111'}],

    [{v:15, f:'1111'}, {v:0, f:'0000'},null],
    [{v:15, f:'1111'}, ,{v:1, f:'0001'}],
    [{v:15, f:'1111'}, ,{v:2, f:'0010'}],
    [{v:15, f:'1111'}, ,{v:3, f:'0011'}],
    [{v:15, f:'1111'}, ,{v:4, f:'0100'}],
    [{v:15, f:'1111'}, ,{v:5, f:'0101'}],
    [{v:15, f:'1111'}, ,{v:6, f:'0110'}],
    [{v:15, f:'1111'}, ,{v:7, f:'0111'}],
    [{v:15, f:'1111'}, ,{v:8, f:'1000'}],
    [{v:15, f:'1111'}, ,{v:9, f:'1001'}],
    [{v:15, f:'1111'}, ,{v:10, f:'1010'}],
    [{v:15, f:'1111'}, ,{v:11, f:'1011'}],
    [{v:15, f:'1111'}, ,{v:12, f:'1100'}],
    [{v:15, f:'1111'}, ,{v:13, f:'1101'}],
    [{v:15, f:'1111'}, ,{v:14, f:'1110'}],
    [{v:15, f:'1111'}, ,{v:15, f:'1111'}]
    ]);

  var options = {
     chart: {
        title: ' plotting the simulation of floating point with Basic Arithmetics',
        subtitle: 'based on precision 4 bits'
     },
     width: 1050,
     height: 500,
     /*
     series: {
        0: {axis: 'hours studied'},
        1: {axis: 'final grade'}
     },
     axes: {
      x: {'final grade': {label: 'Final Exam Grade'} },
      y: {'hours studied': {label: 'Hours lll Studied'} }
      }*/
   };
   // Instantiate and draw the chart.
   var chart = new google.charts.Scatter(document.getElementById('test2'));
   chart.draw(data, google.charts.Scatter.convertOptions(options));
}
google.charts.setOnLoadCallback(draw1);

    /*
    [4, {v:0, f:'limited'},null],
    [4, {v:1, f:'limited'},null],
    [4, {v:2, f:'limited'},null],
    [4, {v:3, f:'limited'},null],
    [4, {v:4, f:'limited'},null],
    [4, {v:5, f:'limited'},null],
    [4, {v:6, f:'limited'},null],
    [4, {v:7, f:'limited'},null],
    [4, {v:8, f:'limited'},null],
    [4, {v:9, f:'limited'},null],
    [4, {v:10, f:'limited'},null],
    [4, {v:11, f:'limited'},null],
    [4, ,{v:12, f:'limited'}],
    [4, ,{v:13, f:'limited'}],
    [4, ,{v:14, f:'limited'}],
    [4, ,{v:15, f:'limited'}],

    [5, {v:0, f:'limited'},null],
    [5, {v:1, f:'limited'},null],
    [5, {v:2, f:'limited'},null],
    [5, {v:3, f:'limited'},null],
    [5, {v:4, f:'limited'},null],
    [5, {v:5, f:'limited'},null],
    [5, {v:6, f:'limited'},null],
    [5, {v:7, f:'limited'},null],
    [5, {v:8, f:'limited'},null],
    [5, {v:9, f:'limited'},null],
    [5, {v:10, f:'limited'},null],
    [5, ,{v:11, f:'limited'}],
    [5, ,{v:12, f:'limited'}],
    [5, ,{v:13, f:'limited'}],
    [5, ,{v:14, f:'limited'}],
    [5, ,{v:15, f:'limited'}],

    [6, {v:0, f:'limited'},null],
    [6, {v:1, f:'limited'},null],
    [6, {v:2, f:'limited'},null],
    [6, {v:3, f:'limited'},null],
    [6, {v:4, f:'limited'},null],
    [6, {v:5, f:'limited'},null],
    [6, {v:6, f:'limited'}, null],
    [6, {v:7, f:'limited'},null],
    [6, {v:8, f:'limited'},null],
    [6, {v:9, f:'limited'},null],
    [6, ,{v:10, f:'limited'}],
    [6, ,{v:11, f:'limited'}],
    [6, ,{v:12, f:'limited'}],
    [6, ,{v:13, f:'limited'}],
    [6, ,{v:14, f:'limited'}],
    [6, ,{v:15, f:'limited'}],

    [7, {v:0, f:'limited'},null],
    [7, {v:1, f:'limited'},null],
    [7, {v:2, f:'limited'},null],
    [7, {v:3, f:'limited'},null],
    [7, {v:4, f:'limited'},null],
    [7, {v:5, f:'limited'},null],
    [7, {v:6, f:'limited'},null],
    [7, {v:7, f:'limited'},null],
    [7, {v:8, f:'limited'},null],
    [7, ,{v:9, f:'limited'}],
    [7, ,{v:10, f:'limited'}],
    [7, ,{v:11, f:'limited'}],
    [7, ,{v:12, f:'limited'}],
    [7, ,{v:13, f:'limited'}],
    [7, ,{v:14, f:'limited'}],
    [7, ,{v:15, f:'limited'}],


    [8, {v:0, f:'limited'},null],
    [8, {v:1, f:'limited'},null],
    [8, {v:2, f:'limited'},null],
    [8, {v:3, f:'limited'},null],
    [8, {v:4, f:'limited'},null],
    [8, {v:5, f:'limited'},null],
    [8, {v:6, f:'limited'},null],
    [8, {v:7, f:'limited'},null],
    [8, ,{v:8, f:'limited'}],
    [8, ,{v:9, f:'limited'}],
    [8, ,{v:10, f:'limited'}],
    [8, ,{v:11, f:'limited'}],
    [8, ,{v:12, f:'limited'}],
    [8, ,{v:13, f:'limited'}],
    [8, ,{v:14, f:'limited'}],
    [8, ,{v:15, f:'limited'}],


    [9, {v:0, f:'limited'},null],
    [9, {v:1, f:'limited'},null],
    [9, {v:2, f:'limited'},null],
    [9, {v:3, f:'limited'},null],
    [9, {v:4, f:'limited'},null],
    [9, {v:5, f:'limited'},null],
    [9, {v:6, f:'limited'}, null],
    [9, ,{v:7, f:'limited'}],
    [9, ,{v:8, f:'limited'}],
    [9, ,{v:9, f:'limited'}],
    [9, ,{v:10, f:'limited'}],
    [9, ,{v:11, f:'limited'}],
    [9, ,{v:12, f:'limited'}],
    [9, ,{v:13, f:'limited'}],
    [9, ,{v:14, f:'limited'}],
    [9, ,{v:15, f:'limited'}],

    [10, {v:0, f:'limited'},null],
    [10, {v:1, f:'limited'},null],
    [10, {v:2, f:'limited'},null],
    [10, {v:3, f:'limited'},null],
    [10, {v:4, f:'limited'},null],
    [10, {v:5, f:'limited'},null],
    [10, ,{v:6, f:'limited'}],
    [10, ,{v:7, f:'limited'}],
    [10, ,{v:8, f:'limited'}],
    [10, ,{v:9, f:'limited'}],
    [10, ,{v:10, f:'limited'}],
    [10, ,{v:11, f:'limited'}],
    [10, ,{v:12, f:'limited'}],
    [10, ,{v:13, f:'limited'}],
    [10, ,{v:14, f:'limited'}],
    [10, ,{v:15, f:'limited'}],

    [11, {v:0, f:'limited'},null],
    [11, {v:1, f:'limited'},null],
    [11, {v:2, f:'limited'},null],
    [11, {v:3, f:'limited'},null],
    [11, {v:4, f:'limited'},null],
    [11, ,{v:5, f:'limited'}],
    [11, ,{v:6, f:'limited'}],
    [11, ,{v:7, f:'limited'}],
    [11, ,{v:8, f:'limited'}],
    [11, ,{v:9, f:'limited'}],
    [11, ,{v:10, f:'limited'}],
    [11, ,{v:11, f:'limited'}],
    [11, ,{v:12, f:'limited'}],
    [11, ,{v:13, f:'limited'}],
    [11, ,{v:14, f:'limited'}],
    [11, ,{v:15, f:'limited'}],

    [12, {v:0, f:'limited'},null],
    [12, {v:1, f:'limited'},null],
    [12, {v:2, f:'limited'},null],
    [12, {v:3, f:'limited'},null],
    [12, ,{v:4, f:'limited'}],
    [12, ,{v:5, f:'limited'}],
    [12, ,{v:6, f:'limited'}],
    [12, ,{v:7, f:'limited'}],
    [12, ,{v:8, f:'limited'}],
    [12, ,{v:9, f:'limited'}],
    [12, ,{v:10, f:'limited'}],
    [12, ,{v:11, f:'limited'}],
    [12, ,{v:12, f:'limited'}],
    [12, ,{v:13, f:'limited'}],
    [12, ,{v:14, f:'limited'}],
    [12, ,{v:15, f:'limited'}],

    [13, {v:0, f:'limited'},null],
    [13, {v:1, f:'limited'},null],
    [13, {v:2, f:'limited'},null],
    [13, ,{v:3, f:'limited'}],
    [13, ,{v:4, f:'limited'}],
    [13, ,{v:5, f:'limited'}],
    [13, ,{v:6, f:'limited'}],
    [13, ,{v:7, f:'limited'}],
    [13, ,{v:8, f:'limited'}],
    [13, ,{v:9, f:'limited'}],
    [13, ,{v:10, f:'limited'}],
    [13, ,{v:11, f:'limited'}],
    [13, ,{v:12, f:'limited'}],
    [13, ,{v:13, f:'limited'}],
    [13, ,{v:14, f:'limited'}],
    [13, ,{v:15, f:'limited'}],

    [14, {v:0, f:'limited'},null],
    [14, {v:1, f:'limited'},null],
    [14, ,{v:2, f:'limited'}],
    [14, ,{v:3, f:'limited'}],
    [14, ,{v:4, f:'limited'}],
    [14, ,{v:5, f:'limited'}],
    [14, ,{v:6, f:'limited'}],
    [14, ,{v:7, f:'limited'}],
    [14, ,{v:8, f:'limited'}],
    [14, ,{v:9, f:'limited'}],
    [14, ,{v:10, f:'limited'}],
    [14, ,{v:11, f:'limited'}],
    [14, ,{v:12, f:'limited'}],
    [14, ,{v:13, f:'limited'}],
    [14, ,{v:14, f:'limited'}],
    [14, ,{v:15, f:'limited'}],

    [15, {v:0, f:'limited'},null],
    [15, ,{v:1, f:'limited'}],
    [15, ,{v:2, f:'limited'}],
    [15, ,{v:3, f:'limited'}],
    [15, ,{v:4, f:'limited'}],
    [15, ,{v:5, f:'limited'}],
    [15, ,{v:6, f:'limited'}],
    [15, ,{v:7, f:'limited'}],
    [15, ,{v:8, f:'limited'}],
    [15, ,{v:9, f:'limited'}],
    [15, ,{v:10, f:'limited'}],
    [15, ,{v:11, f:'limited'}],
    [15, ,{v:12, f:'limited'}],
    [15, ,{v:13, f:'limited'}],
    [15, ,{v:14, f:'limited'}],
    [15, ,{v:15, f:'limited'}]

    /*
    [1, ,{v:0, f:'nothing'}],
    [1, ,{v:1, f:'nothing'}],
    [1, ,{v:2, f:'nothing'}],
    [1, ,{v:3, f:'nothing'}],
    [1, ,{v:4, f:'nothing'}],
    [1, ,{v:5, f:'nothing'}],
    [1, ,{v:6, f:'nothing'}],
    [1, ,{v:7, f:'nothing'}],



    /*
    [1, {v:1, f:'0000'},{v:0, f:'0011'}],
    [2, {v:1, f:'0000'},{v:2, f:'0010'}],
    [3, {v:1, f:'0000'},{v:3, f:'0011'}],
    [4, {v:0, f:'0000'},{v:4, f:'0100'}],
    [5, {v:0, f:'0000'},{v:5, f:'0101'}],
    [6, {v:0, f:'0000'},{v:6, f:'0110'}],
    [7, {v:0, f:'0000'},{v:7, f:'0111'}],
    [8, {v:0, f:'0000'},{v:8, f:'1000'}],
    [9, {v:0, f:'0000'},{v:9, f:'1001'}],
    [10, ,{v:10, f:'1010'}],
    [11, ,{v:11, f:'1011'}],
    [12, ,{v:12, f:'1100'}],
    [13, ,{v:13, f:'1101'}],
    [14, ,{v:14, f:'1110'}],
    [15, ,{v:15, f:'1111'}]
    */


    /*
   	[{v:0, f:'0000'},{v:0, f:'0000'}],
    [{v:0, f:'0000'},{v:1, f:'0011'}],
    [{v:0, f:'0000'},{v:2, f:'0010'}],
    [{v:0, f:'0000'},{v:3, f:'0011'}],
    [{v:0, f:'0000'},{v:4, f:'0100'}],
    [{v:0, f:'0000'},{v:5, f:'0101'}],
    [{v:0, f:'0000'},{v:6, f:'0110'}],
    [{v:0, f:'0000'},{v:7, f:'0111'}],
    [{v:0, f:'0000'},{v:8, f:'1000'}],
    [{v:0, f:'0000'},{v:9, f:'1001'}],
    [{v:0, f:'0000'},{v:10, f:'1010'}],
    [{v:0, f:'0000'},{v:11, f:'1011'}],
    [{v:0, f:'0000'},{v:12, f:'1100'}],
    [{v:0, f:'0000'},{v:13, f:'1101'}],
    [{v:0, f:'0000'},{v:14, f:'1110'}],
    [{v:0, f:'0000'},{v:15, f:'1111'}],
   	[1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9], [1,10], [1,11], [1,12], [1,13], [1,14], [1,15],
   	[2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9], [2,10], [2,11], [2,12], [2,13], [2,14], [2,15],
   	[3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [3,9], [3,10], [3,11], [3,12], [3,13], [3,14], [3,15],
   	[4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8], [4,9], [4,10], [4,11], [4,12], [4,13], [4,14], [4,15],
   	[5,0], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7], [5,8], [5,9], [5,10], [5,11], [5,12], [5,13], [5,14], [5,15],
   	[6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7], [6,8], [6,9], [6,10], [6,11], [6,12], [6,13], [6,14], [6,15],
   	[7,0], [7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7], [7,8], [7,9], [7,10], [7,11], [7,12], [7,13], [7,14], [7,15],
   	[8,0], [8,1], [8,2], [8,3], [8,4], [8,5], [8,6], [8,7], [8,8], [8,9], [8,10], [8,11], [8,12], [8,13], [8,14], [8,15],
   	[9,0], [9,1], [9,2], [9,3], [9,4], [9,5], [9,6], [9,7], [9,8], [9,9], [9,10], [9,11], [9,12], [9,13], [9,14], [9,15],
   	[10,0], [10,1], [10,2], [10,3], [10,4], [10,5], [10,6], [10,7], [10,8], [10,9], [10,10], [10,11], [10,12], [10,13], [10,14], [10,15],
   	[11,0], [11,1], [11,2], [11,3], [11,4], [11,5], [11,6], [11,7], [11,8], [11,9], [11,10], [11,11], [11,12], [11,13], [11,14], [11,15],
   	[12,0], [12,1], [12,2], [12,3], [12,4], [12,5], [12,6], [12,7], [12,8], [12,9], [12,10], [12,11], [12,12], [12,13], [12,14], [12,15],
   	[13,0], [13,1], [13,2], [13,3], [13,4], [13,5], [13,6], [13,7], [13,8], [13,9], [13,10], [13,11], [13,12], [13,13], [13,14], [13,15],
   	[14,0], [14,1], [14,2], [14,3], [14,4], [14,5], [14,6], [14,7], [14,8], [14,9], [14,10], [14,11], [14,12], [14,13], [14,14], [14,15],
   	[15,0], [15,1], [15,2], [15,3], [15,4], [15,5], [15,6], [15,7], [15,8], [15,9], [15,10], [15,11], [15,12], [15,13], [15,14], [15,15]
   ]);
    */

  /*
    [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [0,8], [0,9], [0,10], [0,11], [0,12], [0,13], [0,14], [0,15], [0,16],
    [1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9], [1,10], [1,11], [1,12], [1,13], [1,14], [1,15], [1,16],
    [2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9], [2,10], [2,11], [2,12], [2,13], [2,14], [2,15], [2,16],
    [3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [3,9], [3,10], [3,11], [3,12], [3,13], [3,14], [3,15], [3,16],
    [4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8], [4,9], [4,10], [4,11], [4,12], [4,13], [4,14], [4,15], [4,16],
    [5,0], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7], [5,8], [5,9], [5,10], [5,11], [5,12], [5,13], [5,14], [5,15], [5,16],
    [6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7], [6,8], [6,9], [6,10], [6,11], [6,12], [6,13], [6,14], [6,15], [6,16],
    [7,0], [7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7], [7,8], [7,9], [7,10], [7,11], [7,12], [7,13], [7,14], [7,15], [7,16],
    [8,0], [8,1], [8,2], [8,3], [8,4], [8,5], [8,6], [8,7], [8,8], [8,9], [8,10], [8,11], [8,12], [8,13], [8,14], [8,15], [8,16],
    [9,0], [9,1], [9,2], [9,3], [9,4], [9,5], [9,6], [9,7], [9,8], [9,9], [9,10], [9,11], [9,12], [9,13], [9,14], [9,15], [9,16],
    [10,0], [10,1], [10,2], [10,3], [10,4], [10,5], [10,6], [10,7], [10,8], [10,9], [10,10], [10,11], [10,12], [10,13], [10,14], [10,15], [10,16],
    [11,0], [11,1], [11,2], [11,3], [11,4], [11,5], [11,6], [11,7], [11,8], [11,9], [11,10], [11,11], [11,12], [11,13], [11,14], [11,15], [11,16],
    [12,0], [12,1], [12,2], [12,3], [12,4], [12,5], [12,6], [12,7], [12,8], [12,9], [12,10], [12,11], [12,12], [12,13], [12,14], [12,15], [12,16],
    [13,0], [13,1], [13,2], [13,3], [13,4], [13,5], [13,6], [13,7], [13,8], [13,9], [13,10], [13,11], [13,12], [13,13], [13,14], [13,15], [13,16],
    [14,0], [14,1], [14,2], [14,3], [14,4], [14,5], [14,6], [14,7], [14,8], [14,9], [14,10], [14,11], [14,12], [14,13], [14,14], [14,15], [14,16],
    [15,0], [15,1], [15,2], [15,3], [15,4], [15,5], [15,6], [15,7], [15,8], [15,9], [15,10], [15,11], [15,12], [15,13], [15,14], [15,15], [15,16],
    [16,0], [16,1], [16,2], [16,3], [16,4], [16,5], [16,6], [16,7], [16,8], [16,9], [16,10], [16,11], [16,12], [16,13], [16,14], [16,15], [16,16]

  */