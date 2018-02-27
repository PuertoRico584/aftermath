var videoTop;
var videoHeight;
var windowWidth;

$(document).ready(function(){
  // $('#hidden-nav').hide();
  windowWidth = $(window).width();
  //console.log(currentNav);
  $(currentNav).addClass('active-nav');
  $(mobileNav).addClass('mobile-active-nav');

  $('#menu-toggle').click(function(){
    // $('#hidden-nav').show();
    document.getElementById("hidden-nav").style.width = "100%";
  });

  // menu animation
   $('#nav-container').on('click', function(){
     $('#hidden-nav').show();
     $('#nav-container').hide();
   });



   $('#hidden-nav').on('click', function (){
     $('#nav-container').show();
   });

  $('#closebtn').click(function(){

    // document.getElementById("hidden-nav").style.width = "0%";
    //  $('#nav-container')[0].classList.remove("change");
      $('#hidden-nav').hide();
   });


  $('#trans-btn').on('click', function(){

    // this.classList.toggle("spanish");
    //
    // if (this.classList.value.includes("spanish")){
    //   this.innerHTML = "ES";
    // } else {
    //   this.innerHTML = "EN";
    // }


  });




});
