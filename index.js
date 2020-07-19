$(function(){


    init();
    dynamicDoctorButtons();
    dynamicDoctorImages();
    doctorsIsotope();
    doctorInfoChange();
    setPatientData();
    dynamicPatientsImages();
    patientsIsotope();
    patientInfoSlick();


    $('#sticky-header').sticky({
        topSpacing : 0,
        zIndex : 1
    });

    
    
    

    $(".grid-item img").on('click', function(){
      $(".grid-item img").removeClass('scale-up');
      $(this).addClass('scale-up');
      
    })
    
  


    
})