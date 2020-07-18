$(function(){

    $('#sticky-header').sticky({
        topSpacing : 0,
        zIndex : 1
    });

    
    
    $('#doctor-grid').isotope({

      itemSelector: '.grid-item',
      layoutMode : 'masonry',
      percentPosition: true,
      masonry: {
        
      }

    })

    $(".grid-item img").on('click', function(){
      $(".grid-item img").removeClass('scale-up');
      $(this).addClass('scale-up');
      
    })
    
  


    
})