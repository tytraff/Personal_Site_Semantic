/*
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
};
*/


function slideSwitch() {
    var $active = $('div#slideshow IMG.active');
    var $next = $active.next();    

        $next.addClass('active');

        $active.removeClass('active');
    }

$(function() {
    setInterval( "slideSwitch()", 5000 );
});
