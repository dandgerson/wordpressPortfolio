

$(document).ready(function () {


	// Parallax adaptation for new version jQuery
	$('[data-parallax="scroll"]').parallax();

	// Portfolio
	$(".s-portfolio li").click(function() {
		$(".s-portfolio li").removeClass('active');
		$(this).addClass('active');
	});

	// mixitup
	var containerEl = document.querySelector('.p-container');
	var mixer = mixitup(containerEl);
	$(".portfolio-item").each(function(i) {
		$(this).find("a").attr("href", "#work-" + i);
		$(this).find(".port-descr").attr("id", "work-" + i);
	});

	// Animate + Waypoint
	$(".top-text h1").animated("fadeInDown", "fadeOut");
	$(".top-text p").animated("fadeInUp", "fadeOut");

	$(".top-text h1").css("animation-delay","1s");
	$(".top-text p").css("animation-delay","1.8s");

	$(".h-about").animated("fadeInUp", "fadeOutDown");

	$(".animation-about-1").animated("flipInY", "flipOutY");
	$(".animation-about-1").css("animation-delay",".8s");
	$(".animation-about-2").animated("fadeInLeft", "fadeOut");
	$(".animation-about-3").animated("fadeInRight", "fadeOut");

	$(".h-portfolio").animated("fadeInUp", "fadeOutDown");
	$(".h-contacts").animated("fadeInUp", "fadeOutDown");

	// resume
	$(".h-resume").animated("fadeInUp", "fadeOut");
	$(".l-ri-1").animated("fadeInLeft", "fadeOut");
	$(".l-ri-2").animated("fadeInLeft", "fadeOut");
	$(".l-ri-3").animated("fadeInLeft", "fadeOut");
	$(".l-ri-4").animated("fadeInLeft", "fadeOut");
	
	$(".r-ri-1").animated("fadeInRight", "fadeOut");
	$(".r-ri-2").animated("fadeInRight", "fadeOut");
	$(".r-ri-3").animated("fadeInRight", "fadeOut");
	$(".r-ri-4").animated("fadeInRight", "fadeOut");

	$(".resume-item").css("animation-delay",".8s");

	// Resize header
	function heightDetect() {
		$(".main-head").css('height', $(window).height());
	}

	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});

	// sandwich button
	$(".sandwich").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".menu-item").click(function() {
		$(".top-menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

	// sandwich

	$(".sandwich").click(function() {
        if (!$(".top-menu").is(":visible")) {
            $(".top-text").addClass("h-opacify");
            $(".top-menu").fadeIn(600);
            $(".top-menu li a").addClass("fadeInUp animated");
        } else {
            $(".top-text").removeClass("h-opacify");
            $(".top-menu").fadeOut(600);
            $(".top-menu li a").removeClass("fadeInUp animated");
        }
    });

	$(".top-menu ul a").click(function() {
		$(".top-text").removeClass("h-opacify");
	});﻿

	// Magnific popup
	$(".popup").magnificPopup({type:"image"});
	$(".popup-content").magnificPopup({
		type: "inline",
		midClick: true
	});
	// jqBootstrapValidation
	$("input, select, textarea").jqBootstrapValidation();

	// mPageScroll2id
	$(".top-menu ul a").mPageScroll2id();


});

// Preloader

$(window).ready(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
