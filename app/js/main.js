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
	$(".sandwich").click(function() {
		$(".sandwich").toggleClass("active");
	});

$(".menu-item").click(function() {
	$(".top-menu").fadeOut(600);
	$(".sandwich").toggleClass("active");
})

// sandwich
	$(".sandwich").click(function() {
		if ($(".top-menu").is(":visible")) {
			$(".top-text").removeClass("h-opacify");
			$(".top-menu").fadeOut(600);
			$(".top-menu li a").removeClass("fadeInUp animated");
			} else {
				$(".top-text").addClass("h-opacify");
				$(".top-menu").fadeIn(600);
				$(".top-menu li a").addClass("fadeInUp animated");
			};
	});

});