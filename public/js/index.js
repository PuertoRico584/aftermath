$(document).ready(function(){


  var clickMe = $("#click-event");
  var clickMe2 = $("#click-event2");
  var clickMe3 = $("#click-event3");
  var clickMe4 = $("#click-event4");
  var clickMe5 = $("#click-event5");
  var clickMe6 = $("#click-event6");
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(clickMe2).hide();
  $(clickMe3).hide();
  $(clickMe4).hide();
  $(clickMe5).hide();
  $(clickMe6).hide();



  $("#click-me2").hover(function () {
    $("#click-event2").fadeToggle();
  });
  $("#click-me3").hover(function () {
    $("#click-event3").fadeToggle();
  });
  $("#click-me4").hover(function () {
    $("#click-event4").fadeToggle();
  });
  $("#click-me5").hover(function () {
    $("#click-event5").fadeToggle();
  });
  $("#click-me6").hover(function () {
    $("#click-event6").fadeToggle();
  });


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
           $('header').removeClass('nav-down').addClass('nav-up');
       } else {
           // Scroll Up
           if(st + $(window).height() < $(document).height()) {
               $('header').removeClass('nav-up').addClass('nav-down');
           }
       }

       lastScrollTop = st;
   }





});


var tempId;
function fadeIcons(x){
  var idBucket = ['#click-me2', '#click-me3', '#click-me4', '#click-me5', '#click-me6'];
  for(i=0; i<idBucket.length; i++){
    tempNumber = i + 2;
    tempString = tempNumber.toString();
    tempId = '#click-me' + tempString;
     if (i == x){

     }else{
       console.log(tempId);
       $(tempId).css("opacity", "0.4");
       console.log('yassssss bitch');
     }
   }
}

function unfadeIcons(x){
  var idBucket = ['#click-me2', '#click-me3', '#click-me4', '#click-me5', '#click-me6'];
  for(i=0; i<idBucket.length; i++){
    tempNumber = i + 2;
    tempString = tempNumber.toString();
    tempId = '#click-me' + tempString;
    $(tempId).css("opacity", "1");
   }
 }
