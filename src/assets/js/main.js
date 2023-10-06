jQuery(function ($) {
    'use strict';
	
	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 30){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "1199"
	});
	
	// Others Option For Responsive JS
	/*$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});
*/
	// Language Switcher
	

	// Search Menu JS
	/*$(".navbar-nav .search-box").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-overlay-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
	});
	$(".others-options .search-box").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-overlay-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
	});*/

	// TweenMax JS
	/*$('.home-slides').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.main-slides-content, .main-slides-image').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -.4;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	});
	$('.hero-slides').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.hero-slides-content').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -.4;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	});*/

	// Home Slides
	/*$('.home-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>"
		],
	});

	// Hero Slides
	$('.hero-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>"
		],
	});*/

	

	

	// Popular Events Slides	
	$('.popular_events').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		smartSpeed: 500,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>"
		],

		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
	// Browse By Category Slides	
	$('.browse_category').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		smartSpeed: 500,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>"
		],

		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
	// Nightlife & Clubs  Slides	
	$('.nightlife').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		smartSpeed: 500,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>"
		],

		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
	// New Year's  Slides	
	$('.newyears').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		smartSpeed: 500,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>"
		],

		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
	// Boat Cruises  Slides	
	$('.boat_cruises').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		smartSpeed: 500,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>"
		],

		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
	
	

	// AOS JS
	//AOS.init();

	// WOW Animation JS
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}

	// Go to Top
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 600) $('.go-top').addClass('active');
		if (scrolled < 600) $('.go-top').removeClass('active');
	});  
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});
	
	// Preloader JS
	jQuery(window).on('load',function(){
		jQuery(".preloader").fadeOut(500);
	});

	
}(jQuery));

