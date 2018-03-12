$(document).ready(function(){


  var clickMe = $("#click-event");
  var clickMe2 = $("#click-event2");
  var clickMe3 = $("#click-event3");
  var clickMe4 = $("#click-event4");
  var clickMe5 = $("#click-event5");
  var clickMe6 = $("#click-event6");

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
       $(tempId).css("opacity", "0.5");
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
