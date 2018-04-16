function toggleTitle(){
  $('.homepage-logo').fadeToggle();
  if ( $('.navbar-brand').css('visibility') == 'hidden' ){
    $('.navbar-brand').css('visibility', 'visible');
  }
  else{
    $('.navbar-brand').css('visibility','hidden');
  }

  if ( $('.es-and-about').css('display') == 'none' ){
    $('.es-and-about').css('display', 'flex');
  }
  else {
    $('.es-and-about').css('display', 'none');
  }
}


function toggleTitleInner(){
  $('.navbar-brand').css('z-index','2');
    $('.navbar-brand').removeClass('mixitup-control-active');

  if ( $('.es-and-about').css('display') == 'none' ){
    $('.es-and-about').css('display', 'flex');
  }
  else {
    $('.es-and-about').css('display', 'none');
  }
  $('.inner-wrapper').toggle();
}

// from http://jsfiddle.net/mariusc23/s6mLJ/31/

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var scrollDelta = 5;
var navbarHeight = $('.nav-bar-wrapper').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than scrollDelta
    if(Math.abs(lastScrollTop - st) <= scrollDelta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
          console.log('should be hidden');
        $('.nav-bar-wrapper').removeClass('nav-down').addClass('nav-up');

    } else {
        // Scroll Up
        // if(st + $(window).height() < $(document).height()) {
            $('.nav-bar-wrapper').removeClass('nav-up').addClass('nav-down');
        // }
    }

    lastScrollTop = st;
}

$(document).ready(function(){
	$('#navButton').click(function(){
		$(this).toggleClass('is-active');
	});
});
