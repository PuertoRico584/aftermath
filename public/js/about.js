$(document).ready(function(){
  $('.team-image-box').click(function(){
    if (this.classList.contains('visible-bio')) {
      this.classList.remove("visible-bio");
    } else {
      this.classList.add("visible-bio");
    }
  })
});
