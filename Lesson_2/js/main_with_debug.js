//This was debugged by Zoey Colglazier, 1.2020
//corrections will be made, with a comment on the error next to the corrected code

//This modularizes our code so that the page loads better, and we can pick and choose which functions get included in the initialize function.
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];
 //missing semicolon at the end of the function
 	//append the table element to the div
 	$("#mydiv").append("<table>");

 	//append a header row to the table
 	$("table").append("<tr>");

 	//add the "City" and "Population" columns to the header row
 	$("tr").append("<th>City</th><th>Population</th>");

 	//loop to add a new row for each city
	 for (var i = 0; i < cityPop.length; i++){
         //assign longer html strings to a variable
         var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
         //add the row's html string to the table
         $("table").append(rowHtml);
     };

     addColumns(cityPop);
     addEvents();


 	 function addColumns(cityPop){

     $('tr').each(function(i){
			 	if (i===0){
			 	$(this).append('<th>City Size</th>'); //spelling error - append, not apend
			} else {
     		var citySize = '';

     		if (cityPop[i-1].population < 100000){
     			citySize = 'Small';

     		} else if (cityPop[i-1].population < 500000){
     			citySize = 'Medium';

     		} else {
     			citySize = 'Large';
     		};
     		$(this).append('<td>' + citySize + '</td>'); //missing parentheses around this
			};
		});
	}
	//throughout this section there were some weird indents and curly braces that were altered.
 		function addEvents(){

 		$('table').mouseover(function(){
			//pound symbol when there was not one needed
 		var color = "rgb(";

 		for (var i=0; i<3; i++){

 			var random = Math.round(Math.random() * 255);

 			color += random; //didn't need to be a string

 			if (i<2){
 				color += ",";
 			} else {
 				color += ")";
 			};
 		};
 		$(this).css('color', color);
 	});
 	}; //missing closing curly braces  for the function, ordering incorrect in parentheses/braces

 	function clickme(){ //incorrect indentation

 		alert('Hey, you clicked me!');
 	};
 	{ //missing a front curly brace
 	$('table').on('click', clickme);
 	};
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
