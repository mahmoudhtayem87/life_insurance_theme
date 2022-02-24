
$(document).ready(function(){
	$(".section.about-page").each(function(index){
		if(index % 2 != 0)
		$(this).addClass("bg-light")
	});
});
function vhToPx(value) {
	var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		x = w.innerWidth || e.clientWidth || g.clientWidth,
		y = w.innerHeight || e.clientHeight || g.clientHeight;

	var result = (y * value) / 100;
	return result;
}
function vwToPx(value) {
	var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		x = w.innerWidth || e.clientWidth || g.clientWidth,
		y = w.innerHeight || e.clientHeight || g.clientHeight;

	var result = (x * value) / 100;
	return result;
}

function popup(url, title) {
	//notificationsModal
	$("#notificationsModalTitle").text(title);
	$("#notificationsFrame").hide();
	$('#notificationsModal').modal('show');
	$("#notificationsFrame").attr('src', url);
	$("#notificationsFrame").on("load", function () {
		let head = $("#notificationsFrame").contents().find("head");
		let css = `<style>
        .lfr-product-menu-panel
            {
                display:none!important;
            }
        #wrapper
            {
                padding:0!important;
            }
        .control-menu-container
            {
                display:none!important;
            }
        </style>`;
		$(head).append(css);

	});
	window.setTimeout(() => {
		$("#notificationsFrame").show();
	}, 1000); // 5 seconds

}

; (function ($) {

	'use strict';

	// SCROLL TO TOP

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 70) {
			$('.backtop').addClass('reveal');
		} else {
			$('.backtop').removeClass('reveal');
		}
	});

	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000

	});

	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplaySpeed: 6000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}

		]
	});

	$('.testimonial-wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		vertical: true,
		verticalSwiping: true,
		autoplaySpeed: 6000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});

	$('.testimonial-wrap-2').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});


	// Counter

	$('.counter-stat span').counterUp({
		delay: 10,
		time: 1000
	});


	// Shuffle js filter and masonry
	try {
		var Shuffle = window.Shuffle;
		var jQuery = window.jQuery;

		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}
	catch (exp) {

	}

	function popup(url, title) {
		//notificationsModal
		$("#notificationsModalTitle").text(title);
		$("#notificationsFrame").hide();
		$('#notificationsModal').modal('show');
		$("#notificationsFrame").attr('src', url);
		$("#notificationsFrame").on("load", function () {
			let head = $("#notificationsFrame").contents().find("head");
			let css = `<style>
        .lfr-product-menu-panel
            {
                display:none!important;
            }
        #wrapper
            {
                padding:0!important;
            }
        .control-menu-container
            {
                display:none!important;
            }
        </style>`;
			$(head).append(css);

		});
		window.setTimeout(() => {
			$("#notificationsFrame").show();
		}, 1000); // 5 seconds

	}



})(jQuery);
