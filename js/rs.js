$(document).ready(function(){
	$('button').tap(function(submit){
		if($('#name').val().length == 0) {
			$('.noname').text('[Please enter your name.]');
			submit.preventDefault();
		} 
		if($('#address').val().length == 0) {
			$('.noadd').text('[Please enter our address.]');
			submit.preventDefault();
		} 
		if($('#city').val().length == 0) {			
			$('.nocity').text('[Please enter our City/State/Zip.]');
			submit.preventDefault();
		} 
		else {
			submit.preventDefault();
		}
	}); 
	$('#name').tap(function(){
		$('.noname').text('');
	}); 
	$('#address').tap(function(){
		$('.noadd').text('');
	}); 
	$('#city').tap(function(){
		$('.nocity').text('');
	}); 
	$("div.band").on("swiperight", function(event){
		$(event.target).removeClass("band").addClass("bandi");
	});
	$("div.band").on("swipeleft", function(event){
		$(event.target).removeClass("bandi").addClass("band");
	});
}); 