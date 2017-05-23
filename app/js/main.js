$(document).ready(function(){

	function heightDetect() {
		$(".main-head").css('height', $(window).height());
	}
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$('.main-head').parallax({imageSrc: '../img/bg.png'});

	console.log(1)
}); 

$(window).ready(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});