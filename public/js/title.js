
var byline = document.getElementById("byline");
var deckWatcher = scrollMonitor.create(byline,{bottom: -200});



deckWatcher.enterViewport(function() {
  document.getElementById("deck").style.display = "block";
  document.getElementById("deck").classList.add('fadeIn');
  document.getElementById("title-image").classList.add('dim');
  easing: 'liner';
  duration: 1000;
});




(function() {

  var parallaxObj, scrollToThis, interval;

  parallaxObj = $('.parallax');
  scrollToThis = parallaxObj.height();

  function scroll() {

    parallaxObj.animate({
      scrollTop: scrollToThis
    }, 1000);

    if(scrollToThis === 0){
      scrollToThis = parallaxObj.height();
    }else{
      scrollToThis = 0;
    }
  }

  scroll();



}());
