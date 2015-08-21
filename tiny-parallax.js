/*
* TinyParallax
*
* EZ 2kb Parallax - @scirodesign
*
* OPTIONS:
* - movePercent : Amount of parllax movement
* - offset : Manual offset to start parallax (can be negative)
* - mobile : Allow on mobile?
* - direction : Up or down "up" / "down" (default up)
*/
(function( $ ){

'use strict';

$.fn.tinyparallax = function(options){
if(!mobile){

	var opts = $.extend({
		movePercent : 0.1,
		direction : "up",
		offset : 0,
		mobile : true
	}, options);

	var ge; //grabbed entity
	var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	var direction = -1;
	if( opts.direction !== "up"){direction = 1;}
	var counter = 1;
	if(!window.cEC){
		window.cEC = [];
	}

	jQuery(window).off('scroll').on('scroll', update);
	
	return this.each(function(idx, elem){
		ge = jQuery(this);
		jQuery(ge).addClass("tinyLax");

		setupParallax(ge);

	});
}

	function setupParallax(elem){
		var ceTemp = "tinyLaxCE" + counter;
		jQuery(elem).addClass(ceTemp);
		jQuery(elem).css({"position":"relative","background-attachment":"fixed"});
		var parallaxObj = {};
		parallaxObj.opts = opts;
		parallaxObj.elem = elem;

		window.cEC.push(parallaxObj);
		counter ++;
		update();
	}

	function update(){

		jQuery(window.cEC).each(function(idx, parallaxObj){
			var pos = jQuery(window).scrollTop() - jQuery(parallaxObj.elem).offset().top;
			var parallaxAmt = Math.round((pos * parallaxObj.opts.movePercent * direction) + parallaxObj.opts.offset);
			jQuery(parallaxObj.elem).css({"background-position":"50%" + parallaxAmt + "px"});
		});
	}
};
}( jQuery ));
