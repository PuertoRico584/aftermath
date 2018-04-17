$(document).ready(function(){

	//init scrollMagicController
	var controller = new ScrollMagic.Controller();

	//pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '30%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);


	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.4
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);


	//loop through each .project element
	$('.project').each(function(){
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			duration: '80%',
			triggerHook: 0.8
		})
		.setClassToggle(this, 'fade-in')
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
