var sliderSections = document.getElementsByClassName('slider-section');
var slider = document.getElementById('custom-slider');
var sliderUl = document.getElementById('slider-ul');
var lastSlide= sliderUl.lastElementChild;
var lastSlideClone = lastSlide.cloneNode(true);
var firstSlide = sliderUl.firstElementChild;
var firstSlideClone = firstSlide.cloneNode(true);
sliderUl.style.width = 100 * (sliderSections.length + 2) + "%";
sliderUl.insertBefore(lastSlideClone, firstSlide);
sliderUl.appendChild(firstSlideClone);
var leftButtons = document.getElementsByClassName('slider-left');
var rightButton = document.getElementsByClassName('slider-right');
var sliderLeft = sliderUl.offsetLeft;
var slideIndex = 0;
var captionIndex = 0;
$('#inner-caption').html(captionArray[0]);

var toPrevious = function(){
  sliderUl.style.transition = "0.5s left";
  slideIndex --;
  var captionIndex = slideIndex;
  if (slideIndex == 0) {
    sliderUl.style.left = "-100%";
  } else if (slideIndex == -1) {
    sliderUl.style.left = "0%";
    setTimeout(function() {
      sliderUl.style.transition = "0s left";
      sliderUl.style.left = (sliderSections.length - 2) * -100 + '%';
       slideIndex = sliderSections.length - 3;
    }, 500);
    captionIndex = sliderSections.length - 3;
  }
  else {
    sliderUl.style.left = (slideIndex * -100) - 100 + '%';
  }
  var currentCaption = captionArray[captionIndex];
  $('#inner-caption').html(currentCaption);
}

var toNext = function(){
  sliderUl.style.transition = "0.5s left";
  slideIndex ++;
  var captionIndex = slideIndex;
  if (slideIndex == 0) {
    sliderUl.style.left = "-100%";
  }
  else if (slideIndex > sliderSections.length - 3) {
    sliderUl.style.left = (slideIndex * -100) - 100 + '%';
    setTimeout(function() {
      sliderUl.style.transition = "0s left";
      sliderUl.style.left = "-100%";
       slideIndex = 0;
    }, 500);
    captionIndex = 0;
  }
  else {
    sliderUl.style.left = (slideIndex * -100) - 100 + '%';
  }
    var currentCaption = captionArray[captionIndex];
    $('#inner-caption').html(currentCaption);
}

    $('.slider-section').on("swipeleft", toPrevious);
    $('.slider-section').on("swipeleft", toNext);

    $('.slider-left').on("click", toPrevious);
    $('.slider-right').on("click", toNext);
