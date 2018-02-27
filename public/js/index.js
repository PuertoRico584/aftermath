$(document).ready(function(){
  // $("#click-me").hover(function () {
  //   $("#click-event").toggle();
  // });
  var clickMe = $("#click-event");
  var clickMe2 = $("#click-event2");
  var clickMe3 = $("#click-event3");
  var clickMe4 = $("#click-event4");

  $(clickMe2).hide();
  $(clickMe3).hide();
  $(clickMe4).hide();

  $("#click-me2").hover(function () {
    $("#click-event2").fadeToggle();
  });
  $("#click-me3").hover(function () {
    $("#click-event3").fadeToggle();
  });
  $("#click-me4").hover(function () {
    $("#click-event4").fadeToggle();
  });
});
