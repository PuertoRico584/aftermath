{






const DOM = {};
	DOM.svg = document.querySelector('.morph');
	DOM.shapeEl = DOM.svg.querySelector('path');
	DOM.contentElems = Array.from(document.querySelectorAll('.content-wrap'));
	const contentElemsTotal = DOM.contentElems.length;
	const shapes = [
		{
			path: 'M0,0V768H1366V0ZM683,658c-151.33,0-274-122.67-274-274S531.67,110,683,110,957,232.67,957,384,834.33,658,683,658Z',
			pathAlt: 'M-1,7V775H1365V7ZM682.5,1257C221.62,1257-152,883.38-152,422.5S221.62-412,682.5-412,1517-38.38,1517,422.5,1143.38,1257,682.5,1257Z',
			scaleX: 1,
			scaleY: 1,
			rotate: 0,
			tx: -30,
			ty: -300,
			fill: {
				color: '#ffffff',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				path: {
					duration: 3000,
					easing: 'easeOutElastic',
					elasticity: 600
				},
				svg: {
					duration: 2000,
					easing: 'easeOutElastic'
				}
			}
		},
];
let step;

const initShapeLoop = function(pos) {
  pos = pos || 0;
  anime.remove(DOM.shapeEl);
  anime({
    targets: DOM.shapeEl,
    easing: 'linear',
    d: [{value: shapes[pos].pathAlt, duration:3500}],
    loop: false,
    fill: {
      value: shapes[pos].fill.color,
      duration: shapes[pos].fill.duration,
      easing: shapes[pos].fill.easing
    },
    direction: 'alternate'
  });
};

const initShapeEl = function() {
  anime.remove(DOM.svg);
  anime({
    targets: DOM.svg,
    duration: 1,
    easing: 'linear',
    scaleX: shapes[0].scaleX,
    scaleY: shapes[0].scaleY,
    translateX: shapes[0].tx+'px',
    translateY: shapes[0].ty+'px',
    rotate: shapes[0].rotate+'deg'
  });

  initShapeLoop();
};

const createScrollWatchers = function() {

DOM.contentElems.forEach((el, pos) => {
			const scrollElemToWatch = DOM.contentElems[0];
			pos = contentElemsTotal;
			const elementWatcher = scrollMonitor.create(scrollElemToWatch);

elementWatcher.fullyEnterViewport(function() {
    console.log( 'I have entered the viewport' );

    step = 0;
				anime.remove(DOM.shapeEl);
				anime({
					targets: DOM.shapeEl,
					duration: shapes[0].animation.path.duration,
					easing: shapes[0].animation.path.easing,
					elasticity: shapes[0].animation.path.elasticity || 0,
					d: shapes[0].path,
					fill: {
						value: shapes[0].fill.color,
						duration: shapes[0].fill.duration,
						easing: shapes[0].fill.easing
					},
					complete: function() {
						initShapeLoop(0);
					}
        });


});

elementWatcher.exitViewport(function() {
    console.log( 'I have left the viewport' );
    const idx = !elementWatcher.isAboveViewport ? pos-1 : pos+1;

      if( idx <= contentElemsTotal && step !== idx ) {
        step = idx;
        anime.remove(DOM.shapeEl);
        anime({
          targets: DOM.shapeEl,
          duration: shapes[idx].animation.path.duration,
          easing: shapes[idx].animation.path.easing,
          elasticity: shapes[idx].animation.path.elasticity || 0,
          d: shapes[idx].path,
          fill: {
            value: shapes[idx].fill.color,
            duration: shapes[idx].fill.duration,
            easing: shapes[idx].fill.easing
          },
          complete: function() {
            initShapeLoop(idx);
          }
        });

        anime.remove(DOM.svg);
        anime({
          targets: DOM.svg,
          duration: shapes[idx].animation.svg.duration,
          easing: shapes[idx].animation.svg.easing,
          elasticity: shapes[idx].animation.svg.elasticity || 0,
          scaleX: shapes[idx].scaleX,
          scaleY: shapes[idx].scaleY,
          translateX: shapes[idx].tx+'px',
          translateY: shapes[idx].ty+'px',
          rotate: shapes[idx].rotate+'deg'
        });
      }
    });
});
};

const init = function() {

			createScrollWatchers();

	}

	init();
};
