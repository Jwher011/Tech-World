
$(function(){

    var scroll = $(document).scrollTop();
    var navHeight = $('.nav-area').outerHeight();

    $(window).scroll(function() {

        var scrolled = $(document).scrollTop();

        if(scrolled > navHeight){
            $('.nav-area').addClass('animate');
        } 
        
        else {
            $('.nav-area').removeClass('animate');
        }
        
        if(scrolled > scroll){
            $('.nav-area').removeClass('sticky');
        }

        else {
            $('.nav-area').addClass('sticky')
        }

        scroll = $(document).scrollTop();

    });

});


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



$(document).ready(function(){
  $('.carousel').carousel({
    padding: 200
});
autoplay();
function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 4500);
}
});