$(document).ready(function(){

	//init scrollMagicController
	var controller = new ScrollMagic.Controller();

	//pin the intro
	var pinIntroScene = new ScrollMagic.Scene({triggerElement: '#con-trigger', duration: 2500, triggerHook: 0.1})
	.setPin('#con-pin', {pushFollowers: false})
	.addTo(controller);

  // //parallax scene
  //
	// var parallaxTl = new TimelineMax();
	// parallaxTl
	// .from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
	// .from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
	// ;
  //
	// // var parallaxTl2 = new TimelineMax();
	// // parallaxTl2
	// // .from('.content-wrapper2', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
	// // .from('.bcg2', 2, {y: '-50%', ease:Power0.easeNone}, 0)
	// // ;
  //
  //
	// var slideParallaxScene = new ScrollMagic.Scene({
	// 	triggerElement: '.bcg-parallax',
	// 	triggerHook: 1,
	// 	duration: '100%'
	// })
	// .setTween(parallaxTl)
	// .addTo(controller);

	//loop through each .project element
	$('.project').each(function(){
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			duration: '95%',
			triggerHook: 0.5
		})
		.setClassToggle(this, 'fade-in')
		// .addIndicators({
		// 	name: 'fade scene',
		// 	colorTrigger: 'black',
		// 	colorStart: '#99badd',
		// 	colorEnd: 'pink'
		// })
		.addTo(controller);
	});


	(function() {
	    var method;
	    var noop = function () {};
	    var methods = [
	        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
	        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
	        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
	        'timeStamp', 'trace', 'warn'
	    ];
	    var length = methods.length;
	    var console = (window.console = window.console || {});

	    while (length--) {
	        method = methods[length];

	        // Only stub undefined methods.
	        if (!console[method]) {
	            console[method] = noop;
	        }
	    }
	}());

	});
