
$(document).ready(function(){
  $(".timeline").hide();
  $('.expand-collapse').click(function(){
    $('.timeline').toggle();
    console.log(this);
    $(this).empty();
    $(this).toggleClass('shown');
    if (this.classList.contains("spanish-collapse")){
      if (this.classList.contains("shown")){
        console.log('shown');
        $('<i class="fa fa-chevron-down"></i> ver detalles').appendTo(this);
        console.log('append down');

      } else {
        $('<i class="fa fa-chevron-up"></i> ocultar detalles').appendTo(this);
      }

    } else {
      if (this.classList.contains("shown")){
        $('<i class="fa fa-chevron-down"></i> View detalles').appendTo(this);
      } else {
        $('<i class="fa fa-chevron-up"></i> Hide details').appendTo(this);
      }
    }
  });
  // $(".expand-collapse").click(function(){
  //   $(".timeline").toggle();
  //   $(this).html(function(i, v) {
  //     if (this.classList.includes("spanish-collapse")){
  //       return v === '<i class="fa fa-chevron-up"></i> ocultar detalles' ? '<i class="fa fa-chevron-down"></i> ver detalles' : '<i class="fa fa-chevron-up"></i> ocultar detalles'
  //     } else {
  //       return v === '<i class="fa fa-chevron-up"></i> Hide details' ? '<i class="fa fa-chevron-down"></i> View details' : '<i class="fa fa-chevron-up"></i> Hide details';
  //     }
  //
  //   });
  // });
});
(function($) {
  $.fn.timeline = function() {
    var timelineSelectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    timelineSelectors.item.eq(0).addClass(timelineSelectors.activeClass);
    /*selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");*/

    var itemLength = timelineSelectors.item.length;
    $(window).scroll(function() {
      var timelineMax, timelineMin;
      var timelinePos = $(this).scrollTop();
      timelineSelectors.item.each(function(i) {
        timelineMin = $(this).offset().top;
        timelineMax = ($(this).height() + $(this).offset().top);
        var that = $(this)
        if (i == itemLength - 2 && timelinePos > timelineMin + $(this).height() / 2) {
          timelineSelectors.item.removeClass(timelineSelectors.activeClass);
          /*selectors.id.css("background-image", "url(" + selectors.item.last().find(selectors.img).attr('src') + ")"); */
          timelineSelectors.item.last().addClass(timelineSelectors.activeClass)
        } else if (timelinePos <= timelineMax - 40 && timelinePos >= timelineMin) {

          /*selectors.id.css("background-image", "url(" + $(this).find(selectors.img).attr('src') + ")"); */
          timelineSelectors.item.removeClass(timelineSelectors.activeClass);
          $(this).addClass(timelineSelectors.activeClass);
        }

      });
    });

  }
})(jQuery);
$("#timeline-1").timeline();
