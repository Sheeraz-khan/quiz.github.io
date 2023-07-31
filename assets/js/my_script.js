      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'UI Tools');
        data.addColumn('number', 'Responses');

         var data = google.visualization.arrayToDataTable([
         ['Element', 'Density', { role: 'style' }],
         ['A', 200, '#E82583'],            // RGB value
         ['B', 400, '#E82583'],            // English color name
         ['C', 800, '#E82583'],
         ['D', 400, '#E82583'],
         ['E', 900, '#E82583'],
         ['F', 300, '#E82583'],

      ]);

        // Set chart options
        var options = {'width':350,'height':200,legend: 'none'};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }




$(document).ready(function(){
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['',  600],
          ['',  1000],
          ['',  650],
          ['',  1100],
          ['',  700]

        ]);

        var options = {
          curveType: 'function',
          'width':200,'height':200,
          legend: 'none'
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

})

$(document).ready(function(){
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Sales', 'Expenses'],
          ['Jan',  1000,      400],
          ['Feb',  1170,      460],
          ['Mar',  660,       1120],
          ['Apr',  1030,      540],
          ['May',  1000,      400],
          ['June',  1170,      460],
          ['July',  660,       1120],
          ['Aug',  1030,      540],
          ['Sept',  1000,      400],
          ['Oct',  1170,      460],
          ['Nov',  660,       1120],
          ['Dec',  1030,      540],
        ]);

        var options = {
          curveType: 'function',
          legend: 'none'
        };

        var chart = new google.visualization.LineChart(document.getElementById('double-line'));

        chart.draw(data, options);
      }
})


$(document).ready(function(){
  google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     7],
          ['Eat',      7],
          ['Commute',  7],
        ]);

        var options = {
          pieHole: 0.4,
          legend:"none",
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
})


