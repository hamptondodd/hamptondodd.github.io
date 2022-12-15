const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[1].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[2].classList.add("fadeInRight");
        }
    })
})

observer.observe(document.querySelector(".container"));

//const observerTwo = new IntersectionObserver(entries => {
//    entries.forEach(entry => {
//       if(entry.isIntersecting){
//            document.querySelectorAll(".animatedtwo")[0].classList.add("fadeInDown");
//            document.querySelectorAll(".animatedtwo")[1].classList.add("fadeInDown");
//            document.querySelectorAll(".animatedtwo")[2].classList.add("fadeInDown");
//        }
//   })
//})

//observerTwo.observe(document.querySelector(".containertwo"));



$(function(){  // $(document).ready shorthand
fadeIn('slow');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
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