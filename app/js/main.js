// Parallax adaptation for new version jQuery

$(document).ready(function () {
	$('[data-parallax="scroll"]').parallax();
});

// Resize header

$(document).ready(function(){

	function heightDetect() {
		$(".main-head").css('height', $(window).height());
	}

	heightDetect();
	
	$(window).resize(function() {
		heightDetect();
	});

	console.log(1)
}); 

// Preloader

$(window).ready(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

// Sandwich button and toggle menu

$(document).ready(function(){

// sandwich button
	$(".sandwich, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});

// toggle menu
	$(".sandwich").click(function() {
		if ($(".top-menu").is(":visible")) {
			$(".top-menu").fadeOut(600);
			} else {
				$(".top-menu").fadeIn(600);
			};
	});

});