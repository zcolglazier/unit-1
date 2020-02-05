//define AJAX function
function jQueryAjax(){
    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: callback
    });
};
$.get('data/MegaCities.geojson', callback, 'json')
//define callback function
function callback(response, status, jqXHRobject){
    //tasks using the data go here
    console.log(response);
};

$(document).ready(jQueryAjax);
