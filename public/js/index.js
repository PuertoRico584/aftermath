$(document).ready(function(){


  var clickMe = $("#click-event");
  var clickMe2 = $("#click-event2");
  var clickMe3 = $("#click-event3");
  var clickMe4 = $("#click-event4");
  var clickMe5 = $("#click-event5");
  var clickMe6 = $("#click-event6");
  var stepLink = $("#step-link-event");
  var stepLink2 = $("#step-link-event2");
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();
  // var figure = $(".video-step-link").hover( hoverVideo, hideVideo );


  $(clickMe2).hide();
  $(clickMe3).hide();
  $(clickMe4).hide();
  $(clickMe5).hide();
  $(clickMe6).hide();
  $(stepLink).hide();
  $(stepLink2).hide();



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

});

// HOMEPAGE HOVER OPACITY

var tempId;
function fadeIcons(x){
  var idBucket = ['#click-me2', '#click-me3', '#click-me4', '#click-me5', '#click-me6'];
  for(i=0; i<idBucket.length; i++){
    tempNumber = i + 2;
    tempString = tempNumber.toString();
    tempId = '#click-me' + tempString;
     if (i != x){
       $(tempId).css("opacity", "0.4");
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


// FOOTER HOVER OPACITY

 var tempIdFooter;
 function fadeIconsFooter(x){
   var idBucketFooter = ['#footer-0', '#footer-1', '#footer-2', '#footer-3'];
   for(i=0; i<idBucketFooter.length; i++){
     tempNumberFooter = i;
     tempStringFooter = tempNumberFooter.toString();
     tempIdFooter = '#footer-' + tempStringFooter;
      if (i == x){

      }else{
        $(tempIdFooter).css("opacity", "0.4");
      }
    }
 }

 function unfadeIconsFooter(x){
   var idBucketFooter = ['#footer-0', '#footer-1', '#footer-2', '#footer-3'];
   for(i=0; i<idBucketFooter.length; i++){
     tempNumberFooter = i;
     tempStringFooter = tempNumberFooter.toString();
     tempIdFooter = '#footer-' + tempStringFooter;
     $(tempIdFooter).css("opacity", "1");
    }
  }


// SIDEBAR HOVER OPACITY

  var tempIdSidebar;
  function fadeIconsSidebar(x){
    var idBucketSidebar = ['#sidebar-0', '#sidebar-1', '#sidebar-2', '#sidebar-3'];
    for(i=0; i<idBucketSidebar.length; i++){
      tempNumberSidebar = i;
      tempStringSidebar = tempNumberSidebar.toString();
      tempIdSidebar = '#sidebar-' + tempStringSidebar;
       if (i == x){

       }else{
         $(tempIdSidebar).css("opacity", "0.4");
       }
     }
  }

  function unfadeIconsSidebar(x){
    var idBucketSidebar = ['#sidebar-0', '#sidebar-1', '#sidebar-2', '#sidebar-3'];
    for(i=0; i<idBucketSidebar.length; i++){
      tempNumberSidebar = i;
      tempStringSidebar = tempNumberSidebar.toString();
      tempIdSidebar = '#sidebar-' + tempStringSidebar;
      $(tempIdSidebar).css("opacity", "1");
     }
   }


   // NAV HOVER OPACITY

     var tempIdNav;
     function fadeIconsNav(x){
       var idBucketNav = ['#link-0', '#link-1', '#link-2', '#link-3', '#link-4'];
       for(i=0; i<idBucketNav.length; i++){
         tempNumberNav = i;
         tempStringNav = tempNumberNav.toString();
         tempIdNav = '#link-' + tempStringNav;
          if (i == x){

          }else{
            $(tempIdNav).css("opacity", "0.4");
          }
        }
     }

     function unfadeIconsNav(x){
       var idBucketNav = ['#link-0', '#link-1', '#link-2', '#link-3', '#link-4'];
       for(i=0; i<idBucketNav.length; i++){
         tempNumberNav = i;
         tempStringNav = tempNumberNav.toString();
         tempIdNav = '#link-' + tempStringNav;
         $(tempIdNav).css("opacity", "1");
        }
      }
