$(function () {
	"use strict";
	// To Display Hot Tip When Hover Features Link
	$(".navbar .nav > li .feat").hover(
		function () {
			$(".navbar .nav > li .tip").show();
		},
		function () {
			$(".navbar .nav > li .tip").hide();
		}
	);

	// Trigger Carousel
	$(".carousel").carousel({ interval: 3000 });
});