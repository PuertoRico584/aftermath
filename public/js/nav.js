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

  if ( $('.es-and-about').css('display') == 'none' ){
    $('.es-and-about').css('display', 'flex');
  }
  else {
    $('.es-and-about').css('display', 'none');
  }
}
