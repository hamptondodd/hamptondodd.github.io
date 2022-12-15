const hero = document.querySelector('.hero');
const pano = document.querySelector('.pano-img');
const three = document.querySelector('.three');

const tl = new TimelineMax();

tl.fromTo(pano,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(hero,1.5, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(three,1.6, {height: "0%"}, {height: "80%", ease: Power2.easeInOut});

$(function(){  // $(document).ready shorthand
    fadeIn('slow');
      });
      
      $(document).ready(function() {
          
          /* Every time the window is scrolled ... */
          $(window).scroll(function(){
          
              /* Check the location of each desired element */
              $('.fader').each(function(i){
                  
                  var bottom_of_object = $(this).position().top + $(this).outerHeight();
                  var bottom_of_window = $(window).scrollTop() + $(window).height();
                  
                  /* If the object is completely visible in the window, fade it it */
                  if(bottom_of_window > bottom_of_object){
                      
                      $(this).animate({'opacity':'1'},1500);
                          
                  }
                  
              }); 
          
          });
          
      });