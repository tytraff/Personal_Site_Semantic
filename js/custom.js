$(document).ready(function(){
  /*init scrollIt*/
  $.scrollIt();
  /*bigSlide for slide menu*/
  $('.menu-link').bigSlide();

  /*open content with custom settings */
  $('.venobox').venobox({
    framewidth: '700px'
  });

  /*auto-open #firstlink on page load */
  $("#firstlink").venobox().trigger('click');
});

var headroom = new Headroom(header, {
  "tolerance": 5,
  "offset": 205,
  "classes": {
  "initial": "animated",
  "pinned": "slideDown",
  "unpinned": "slideUp"
  }
});
headroom.init();
// to destroy
headroom.destroy();

$('.services h2').addClass('complete').delay(800);
