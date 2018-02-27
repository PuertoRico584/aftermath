// credit: http://jsfiddle.net/mariusc23/s6mLJ/31/

// Hide Header on on scroll down
 $(document).ready(function(){


    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    if (currentPage !== '') {
    var navbarHeight = $('#cinemagraph').offset().top;
  } else {
    var navbarHeight = 70;
  }
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

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('default').addClass('fixed');
        } else {
            // Scroll Up
            if(st < lastScrollTop) {
                $('header').removeClass('fixed').addClass('default');
            }
        }

        lastScrollTop = st;
    }
  })
