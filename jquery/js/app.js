$(document).ready(function(){
	// alert("Hello World");
	// $('button').addClass('animated rotateIn');
	// $('.jumbotron').addClass('animated shake');
	// $('#target1').addClass('animated fadeOut');
	// $("button").addClass("animated");
	// $('.btn-default').addClass('tada');
	// $('#target1').addClass('btn-primary');
	// $('button').removeClass('btn-default');
	// $('button').addClass('btn');
	// $('#target1').prop('disabled', true);
	// $('h2').html("<h1>These are h2 tags</h1>");
	// $('#target3').appendTo('.right') 
	// $('.left').clone().appendTo('.right');
	// $('.row').parent().css('background-color','black');
	// targettting nth child
	// $('.target:nth-child(3)').addClass('animated rotateIn');
	$('.target:odd').addClass('btn');
	$('.target:even').addClass('animated rotateIn');
});

// $() contains part to targt here it is document