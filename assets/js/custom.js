(function ($) {
	"use strict";

	$(document).ready(function(){

		welcome();

		// Menu Dropdown Toggle
		if($('.menu-trigger').length){
			$('.menu-trigger').click(function(){
				$(this).toggleClass('active');
				$('.header-area .nav').slideToggle(200);
			});
		}

		// Scroll animation init
		window.sr = new scrollReveal();
	});


	// Page loading animation
	$(window).load(function(){
		$(".loading-wrapper").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$(".loading-wrapper").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Header Scrolling Set White Background
	$(window).scroll(function() {
		var width = $(window).width();
		if(width > 991) {
			var scroll = $(window).scrollTop();
			if (scroll >= 30) {
				$(".header-area").addClass("header-sticky");
				$(".header-area .dark-logo").css('display', 'block');
				$(".header-area .light-logo").css('display', 'none');
			}else{
				$(".header-area").removeClass("header-sticky");
				$(".header-area .dark-logo").css('display', 'none');
				$(".header-area .light-logo").css('display', 'block');
			}
		}
	});

	// Window resize setting
	$(window).resize(function(){
		welcome();
	});


	// Welcome area height settings
	function welcome() {
		var width = $(window).width();

		if(width > 991) {
			var height = $(window).height();
			$('.welcome-area').css('height', height - 80);
		}else{
			$('.welcome-area').css('height', 'auto');
		}

		// Welcome1 particleJS init
		//if($('#welcome-1').length){
		//	particlesJS('welcome-1', welcome1Settings);
		//}
	}

})(jQuery);
