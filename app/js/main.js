// Parallax adaptation for new version jQuery

$(document).ready(function () {
	$('[data-parallax="scroll"]').parallax();
});


// Animate + Waypoint

$(document).ready(function(){

	$(".top-text h1").animated("fadeInDown", "fadeOut");
	$(".top-text p").animated("fadeInUp", "fadeOut");
	
	$(".top-text h1").css("animation-delay","1s");
	$(".top-text p").css("animation-delay","1.8s");

});

$(document).ready(function(){

	$(".h-about").animated("fadeInUp", "fadeOutDown");

	$(".animation-about-1").animated("flipInY", "flipOutY");
	$(".animation-about-1").css("animation-delay","1s");
	$(".animation-about-2").animated("fadeInLeft", "fadeOut");
	$(".animation-about-3").animated("fadeInRight", "fadeOut");
	$(".h-resume").animated("fadeInUp", "fadeOutDown");
	$(".h-portfolio").animated("fadeInUp", "fadeOutDown");
	$(".h-contacts").animated("fadeInUp", "fadeOutDown");

	

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

// Magnific popup

$(document).ready(function() {
	$(".popup").magnificPopup({type:"image"});
});