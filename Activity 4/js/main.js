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

//This is where Activity 4 from Week 3 begins. Debugged by Zoey Colglazier in 2.2020
//All code from line 106 to the top has not been edited since submission of Week 2

function debugCallback(response){
	//I added a div on my index.html and gave it an id so that my response would show up below the table generated in the last activity.
	mydata = response //have to rename response to mydata so that following line works better
	$(geojsondiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};
	console.log(mydata) //When placed within this function, mydata logs undefined
function debugAjax(){

		var mydata;
		$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			debugCallback(response);
		}
	});
	//code below was moved to debugCallback because it did not belong here.
	//$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};

var mydata = debugAjax(); //mydata wasn't defined outside of the function
console.log(mydata) //mydata also logs undefined outside of the function because this piece of code executes before the function can finish running and loading the data I want.

//removed a bit of code at the end - it tried to run while the server loaded data and mucked everything up.
