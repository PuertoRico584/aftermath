$(document).ready(function(){
// define images
var images = [
  "assets/images/ecology-interactive/interactive_sequence_0.png",
  "assets/images/ecology-interactive/interactive_sequence_1.png",
  "assets/images/ecology-interactive/interactive_sequence_2.png",
  "assets/images/ecology-interactive/interactive_sequence_3.png",
  "assets/images/ecology-interactive/interactive_sequence_4.png",
  "assets/images/ecology-interactive/interactive_sequence_5.png",
  "assets/images/ecology-interactive/interactive_sequence_6.png",
  "assets/images/ecology-interactive/interactive_sequence_7.png",
  "assets/images/ecology-interactive/interactive_sequence_8.png",
  "assets/images/ecology-interactive/interactive_sequence_9.png",
  "assets/images/ecology-interactive/interactive_sequence_10.png",
  "assets/images/ecology-interactive/interactive_sequence_11.png",
  "assets/images/ecology-interactive/interactive_sequence_12.png",
  "assets/images/ecology-interactive/interactive_sequence_13.png",
  "assets/images/ecology-interactive/interactive_sequence_14.png",
  "assets/images/ecology-interactive/interactive_sequence_15.png",
  "assets/images/ecology-interactive/interactive_sequence_16.png"
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
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 320, triggerHook: 0.2})
        .setTween(tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
// build scene
var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 320, triggerHook: 0.2})
        .setPin(".spacerz")
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);



});
