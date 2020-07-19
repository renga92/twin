// Adding data to global scope
let DOCTORS = [...DOCTORS_INFO];
let PATIENTS = [...PATIENTS_INFO];


// Initialization function
//=================================
function init(){




}


//Function to add buttons for filtering doctors
// Button will be created dynamically based on
// Doctors data
//===================================================


function dynamicDoctorButtons(){

    // Getting the unique locations
    let all_locations = DOCTORS.map(m => m.shortLocation.toLocaleLowerCase());
    let locations = all_locations.filter( (m, i) => all_locations.indexOf(m) === i);


    // Adding buttons to the dom
    locations.map(m => {
       let button = `<a class="filter-btn" href="#" data-filter='${m}'>${m}</a>`;
       $('#doctor-grid-buttons').append(button);
    })
    
}


//Function to add doctors image to the doctors grid
//===================================================
function dynamicDoctorImages(){

    // Getting all doctors info
    let doctors = DOCTORS;


    // Adding images to the with a wrapper
    // and necessary data for isotope filter
    doctors.map((m, i) => {
        let gridItem = `<div class='grid-item ${m.shortLocation} ${ i == 10 ? "active" : ""}' ><div class="image-bg"><img data-id="${m.id}" src="${m.imagePath}"/></div></div>`;
        $('#doctors-grid').append(gridItem);
    })
}

// Function to init doctros isotope
//=====================================

function doctorsIsotope(){

    $('#doctors-grid').isotope({
        itemSelector: '.grid-item',
        layoutMode : 'masonry',
        percentPosition: true,
      })

      $('.filter-btn').on('click', function(e){

        e.preventDefault();

        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        let filterName = $(this).data().filter;

        if(filterName != '*'){
            $('#doctors-grid').isotope({
                filter : "."+filterName,
            })
        } else {
            $('#doctors-grid').isotope({
                filter : filterName,
            })
        }

      })

}

// Function to change doctors data on 
// grid image click
//=====================================

function doctorInfoChange(){

    $('#doctors-grid .grid-item img').on('click', function(){

        $('#doctors-grid .grid-item').removeClass('active');
        $(this).parents('.grid-item').addClass('active');

        let doctors = DOCTORS;
        let doctorId = $(this).data().id;
        let doctorInfo = doctors.filter(m => m.id == doctorId)[0];


        $("#doctor-name").text(doctorInfo.name);
        $("#doctor-title").text(doctorInfo.title);
        $("#doctor-awards").text(doctorInfo.achievements);
        $("#doctor-location").text(doctorInfo.location);


    })

}

// Function to get all patient slider 
// Based on patient data

function setPatientData(){

    let patients = PATIENTS;


    patients.map((m, i) => {

    

    let singleItem = `
    
    <div class="patient-info-single" data-id="${i}">


                <div class="patient-name">
                    <h3>${m.name}</h3>
                </div>
                <div class="basic-info">

                    <div class="basic-icon">
                        <img src="assets/Icons/calendar.svg" alt="">
                    </div>
                    <div class="basic-content">
                        <h5>${m.year_of_desease} Years Diabetic</h5>
                        <h4>Reversed in ${m.reversed_days} Days</h4>
                    </div>

                </div>

                <div class="patient-comment">

                    <p><span>“ </span>${m.comment}<span>”</span></p>

                </div>

                <div class="patient-desease-info">


                    <div class="patient-desease-card">

                        <div class="desease-name">
                            <h5>${m.disease_type}</h5>
                        </div>

                        <div class="points-wrap">


                            <div class="points points-before">
                                <h4>${m.point_before}</h4>
                                <h6>${m.status_before}</h6>
                            </div>

                            <div class="points-arrow">
                                <img src="assets/Icons/arrow-second.svg" alt="">
                            </div>

                            <div class="points points-after">
                                <h4>${m.point_after}</h4>
                                <h6>${m.status_after}</h6>
                            </div>


                        </div>

                    </div>    


                    <div class="patient-desease-card card-large">

                        <div class="desease-name">
                            <h5>Medicines</h5>
                        </div>

                        <div class="points-wrap">


                            <div class="points points-before">
                                <h4>${m.medicine_count_before}</h4>
                                <h6>${m.medicines_before}</h6>
                            </div>

                            <div class="points-arrow" >
                                <img src="assets/Icons/arrow-second.svg" alt="">
                            </div>

                            <div class="points points-after">
                                <h4>${m.medicine_count_after}</h4>
                                <h6>${m.medicines_after}</h6>
                            </div>

                        </div>

                    </div>    



                </div>


            </div>

    `;


    $('#patient-slider').append(singleItem);


    })


}

//Function to add patient images to the patients grid
//===================================================
function dynamicPatientsImages(){

    // Getting all doctors info
    let patient = PATIENTS;

    // Adding images to the with a wrapper
    // and necessary data for isotope filter
    patient.map((m, i) => {
        let gridItem = `<div  class='grid-item ${ i == 0 ? "active" : ""}' ><div class="image-bg"><img data-id="${i}" src="${m.imagePath}"/></div></div>`;
        $('#patients-grid').append(gridItem);
    })
}

// Function to init patients isotope
//=====================================

function patientsIsotope(){

    $('#patients-grid').isotope({
        itemSelector: '.grid-item',
        layoutMode : 'masonry',
        percentPosition: true,
      })

}

function patientInfoSlick(){


    $('#patient-slider').on('afterChange', function(e, s, d){

        $('#patients-grid .grid-item').removeClass('active');
        let currentSlide = $('#patients-grid .grid-item')[s.currentSlide];

        $(currentSlide).addClass('active');

    })

    $('#patient-slider').slick({
        autoplay : true,
        autoplaySpeed : 4000,
        arrows : false,
        dots : true,
        pauseOnHover : false
    });

    $('.slick-dots').find('button').remove();

    $('#patients-grid img').on('click', function(){

        $('#patients-grid .grid-item').removeClass('active');
        $(this).parents('.grid-item').addClass('active');

        let slide = $(this).data().id;
        $('#patient-slider').slick('slickGoTo', slide);
    })



}