$(function(){

    $('#sticky-header').sticky({
        topSpacing : 0
    });

    $('#doctors-grid').isotope({ 
        layoutMode: 'cellsByColumn',
        layoutMode: 'cellsByRow',
  // options for cellsByRow layout mode
  cellsByRow: {
    columnWidth: 200,
    rowHeight: 150
  },
  // options for masonry layout mode
  masonry: {
    columnWidth: '.grid-sizer'
  }
    })


    
})