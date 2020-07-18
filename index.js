$(function(){

    $('#sticky-header').sticky({
        topSpacing : 0
    });

    
    
    $('#doctor-grid').isotope({

      itemSelector: '.grid-item',
      layoutMode : 'masonry',
      percentPosition: true,
      masonry: {
        columnWidth: 15
      }

    })
    
  


    
})