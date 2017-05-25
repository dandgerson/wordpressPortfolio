// Parallax adaptation for new version jQuery

$(document).ready(function () {
	$('[data-parallax="scroll"]').parallax();
});


// Animate + Waypoint

$(document).ready(function(){

	$(".top-text h1").addClass("animated fadeInDown");
	$(".top-text p").addClass("animated fadeInUp");

	$(".top-text h1").css("animation-delay","1s");
	$(".top-text p").css("animation-delay","1.8s");

	$(".section-header").addClass("animated");
	// hide our element on page load
	$('.section-header').css('opacity', 0);
 
	$('#s-header-about').waypoint(function() {
			$('#s-header-about').addClass('fadeInUp');
	}, { offset: '70%' });

	$('#s-header-resume').waypoint(function() {
			$('#s-header-resume').addClass('fadeInUp');
	}, { offset: '70%' });

	$('#s-header-portfolio').waypoint(function() {
			$('#s-header-portfolio').addClass('fadeInUp');
	}, { offset: '70%' });

	$('#s-header-contacts').waypoint(function() {
			$('#s-header-contacts').addClass('fadeInUp');
	}, { offset: '70%' });
 
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