$(document).ready(function(){

     $('.owl-carousel').owlCarousel({
          loop:true,
          margin:50,
          nav:true,
          navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
          center:true,
          dots:false,
          rewind:true,
        //   autoplay:true,
        //   autoplayTimeout:2000,
          slideBy:'page',
          smartSpeed:1000,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:3
              }
          }
      })

});