$(document).ready(function(){
    $( ".resizable" ).resizable();
    $( "#tabs" ).tabs();
    $('#button').on("click", function(){
    	$( "#goodbye" ).hide('blind', 1000);
    });
}); 