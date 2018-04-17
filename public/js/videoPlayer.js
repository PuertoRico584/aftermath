{
	const init = function() {

	const player = new Plyr('#player');
	const player_2 = new Plyr('#player_2');

	var videoOverlay = document.getElementById("video_area");

	var circle = document.getElementById("circle");
	var logo = document.getElementById("logo");
	var elementWatcher = scrollMonitor.create(videoOverlay, {top: -500});
	var elementWatcher2 = scrollMonitor.create(videoOverlay, {bottom: -500});

	elementWatcher.enterViewport(function() {
			anime.remove(circle);
			anime.remove(logo);
			var morphingCircle = anime({
			  targets: '#morphing .polymorph',
			  d: [
			    { value: 'M0,0V768H1366V0ZM658.5,649C515.18,649,399,529.91,399,383S515.18,117,658.5,117,918,236.09,918,383,801.82,649,658.5,649Z' },
			  ],
				scale: 3.9,
				translateX: 70,
			  easing: 'easeOutQuad',
			  duration: 2000,
			  loop: false,
				elasticity: 600,
				animation: {
					path: {
						duration: 2000,
						easing: 'easeOutElastic',
						elasticity: 600
					},
					svg: {
						duration: 5000,
						easing: 'easeOutElastic'
					}
			}
	});



	var morphinglogo = anime({
		targets: '.polymorph_logo',
		d: [
			{ value: "M950,377.2c-0.8,37.3-8.8,74.5-23.7,108.5c-14.9,34-36.4,64.9-62.9,90.4c-26.5,25.5-58,45.7-92.1,59c-34,13.4-70.6,19.8-106.8,19.1c-36.2-0.8-72.2-8.6-105.2-23.1c-33-14.4-62.9-35.4-87.6-61.1c-24.7-25.7-44.2-56.3-57.1-89.3c-12.9-33-19.1-68.4-18.5-103.5c0.8-35.1,8.4-70,22.4-101.9c14-31.9,34.3-60.9,59.2-84.8c25-23.9,54.5-42.8,86.5-55.2c32-12.5,66.2-18.5,100.2-17.8c34,0.8,67.7,8.2,98.6,21.8c30.9,13.6,58.9,33.2,82.1,57.4c23.1,24.2,41.4,52.8,53.4,83.7c12.1,30.9,17.8,64.1,17.1,96.9H950z M915.6,377.2c-0.8-32.9-8-65.5-21.1-95.3C881.3,252,862.3,225,839,202.6c-23.4-22.3-51.1-39.9-80.9-51.5c-29.9-11.6-61.9-17.1-93.6-16.5c-31.8,0.8-63.2,7.7-92,20.5c-28.8,12.7-54.9,31.1-76.5,53.6c-21.5,22.6-38.5,49.3-49.6,78.1c-11.2,28.8-16.5,59.7-15.8,90.3c0.8,30.7,7.5,61,19.8,88.7c12.3,27.7,30,52.9,51.8,73.7c21.8,20.8,47.6,37.1,75.3,47.8c27.8,10.7,57.5,15.8,87,15.2c29.6-0.8,58.7-7.3,85.4-19.2c26.7-11.8,50.9-28.9,70.9-49.9c20-21,35.6-45.8,45.9-72.6c10.3-26.7,15.2-55.3,14.5-83.8H915.6z"
		},
		],
		scale: 3.9,
		rotate: 360,
		easing: 'easeOutQuad',
		duration: 2000,
		loop: false,
		elasticity: 600,
		animation: {
			path: {
				duration: 2000,
				easing: 'easeOutElastic',
				elasticity: 600
			},
			svg: {
				duration: 2000,
				easing: 'easeOutElastic'
			}
	}

});

setTimeout(morphOut, 3000);
	function morphOut() {
	document.getElementById("morphing").style.zIndex = 0;
	}


});



	elementWatcher2.exitViewport(function() {
// 			anime.remove(circle);
// 			anime.remove(logo);
// 			var morphingCicle = anime({
// 				targets: '#morphing .polymorph',
// 				d: [
// 					{ value: 'M0,0V768H1366V0ZM658.5,649C515.18,649,399,529.91,399,383S515.18,117,658.5,117,918,236.09,918,383,801.82,649,658.5,649Z' },
// 				],
// 				scale: 1.002,
// 				translateX: 0,
// 				translateY: 0,
// 				easing: 'easeOutQuad',
// 				duration: 2000,
// 				loop: false,
// 				animation: {
// 					path: {
// 						duration: 1000,
// 						easing: 'easeOutElastic',
// 						elasticity: 600
// 					},
// 					svg: {
// 						duration: 1000,
// 						easing: 'easeOutElastic'
// 					}
// 			}
// 	});
// 	var morphingLogo = anime({
// 		targets: '.polymorph_logo',
// 		d: [
// 			{ value: "M950,377.2c-0.8,37.3-8.8,74.5-23.7,108.5c-14.9,34-36.4,64.9-62.9,90.4c-26.5,25.5-58,45.7-92.1,59c-34,13.4-70.6,19.8-106.8,19.1c-36.2-0.8-72.2-8.6-105.2-23.1c-33-14.4-62.9-35.4-87.6-61.1c-24.7-25.7-44.2-56.3-57.1-89.3c-12.9-33-19.1-68.4-18.5-103.5c0.8-35.1,8.4-70,22.4-101.9c14-31.9,34.3-60.9,59.2-84.8c25-23.9,54.5-42.8,86.5-55.2c32-12.5,66.2-18.5,100.2-17.8c34,0.8,67.7,8.2,98.6,21.8c30.9,13.6,58.9,33.2,82.1,57.4c23.1,24.2,41.4,52.8,53.4,83.7c12.1,30.9,17.8,64.1,17.1,96.9H950z M915.6,377.2c-0.8-32.9-8-65.5-21.1-95.3C881.3,252,862.3,225,839,202.6c-23.4-22.3-51.1-39.9-80.9-51.5c-29.9-11.6-61.9-17.1-93.6-16.5c-31.8,0.8-63.2,7.7-92,20.5c-28.8,12.7-54.9,31.1-76.5,53.6c-21.5,22.6-38.5,49.3-49.6,78.1c-11.2,28.8-16.5,59.7-15.8,90.3c0.8,30.7,7.5,61,19.8,88.7c12.3,27.7,30,52.9,51.8,73.7c21.8,20.8,47.6,37.1,75.3,47.8c27.8,10.7,57.5,15.8,87,15.2c29.6-0.8,58.7-7.3,85.4-19.2c26.7-11.8,50.9-28.9,70.9-49.9c20-21,35.6-45.8,45.9-72.6c10.3-26.7,15.2-55.3,14.5-83.8H915.6z"
// 		},
// 	],
// 		scale: 1,
// 		rotate: 0,
// 		easing: 'easeOutQuad',
// 		duration: 2000,
// 		loop: false,
// 		animation: {
// 			path: {
// 				duration: 1000,
// 				easing: 'easeOutElastic',
// 				elasticity: 600
// 			},
// 			svg: {
// 				duration: 1000,
// 				easing: 'easeOutElastic'
// 			}
// 	}
// });

	player.pause();
});




}

	init();
};
