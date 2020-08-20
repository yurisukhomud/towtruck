$(document).ready(function(){
	$('.slider-small').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 500,
		easing: 'linear',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: false,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: false,
		centerMode: true,
		variableWidth: true,
		rows: 1,
		asNavFor: ".slider-big",
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					speed: 1000,
					autoplay: false,
				}
			}
		]
	});
	$('.slider-big').slick({
		arrows: false,
		fade: true,
		asNavFor: ".slider-small",
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					fade: false,
					speed: 1000,
					autoplay: false,
				}
			}
		]
	});
});

