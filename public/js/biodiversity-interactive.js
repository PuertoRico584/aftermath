$(document).ready(function(){
// define images
var images = [
  "assets/images/biodiversity-interactive/interactive_sequence-01.png",
  "assets/images/biodiversity-interactive/interactive_sequence-02.png",
  "assets/images/biodiversity-interactive/interactive_sequence-03.png",
  "assets/images/biodiversity-interactive/interactive_sequence-04.png",
  "assets/images/biodiversity-interactive/interactive_sequence-05.png",
  "assets/images/biodiversity-interactive/interactive_sequence-06.png",
  "assets/images/biodiversity-interactive/interactive_sequence-07.png"
];

// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = {curImg: 0};

// create tween
var tween = TweenMax.to(obj, 0.5,
  {
    curImg: images.length - 1,	// animate propery curImg to number of images
    roundProps: "curImg",				// only integers so it can be used as an array index
    repeat: 0,									// repeat 3 times
    immediateRender: true,			// load first image automatically
    ease: Linear.easeNone,			// show every image the same ammount of time
    onUpdate: function () {
      $("#myimg").attr("src", images[obj.curImg]); // set the image source
    }
  }
);

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: 0.1})
        .setTween(tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
// build scene
var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: 0.1})
        .setPin(".spacerz")
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);



});
