$(document).ready(function(){


  var clickMe = $("#click-event");
  var clickMe2 = $("#click-event2");
  var clickMe3 = $("#click-event3");
  var clickMe4 = $("#click-event4");
  var clickMe5 = $("#click-event5");
  var clickMe6 = $("#click-event6");
  // var dropdown = $(".dropdown-pictures-nav");

  $(clickMe2).hide();
  $(clickMe3).hide();
  $(clickMe4).hide();
  $(clickMe5).hide();
  $(clickMe6).hide();
  $(dropdown).hide();



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
  // $(".expanded-menu").hover(function () {
  //   $(dropdown).toggle();
  // });




});
