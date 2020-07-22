$(function () {
  init();
  dynamicDoctorButtons();
  dynamicDoctorImages();
  doctorsIsotope();
  doctorInfoChange();
  setPatientData();
  dynamicPatientsImages();
  patientsIsotope();
  patientInfoSlick();
  changeDoctorSelection();
  playVideoOnClick();
  playVideoFromOutside();

  $("#sticky-header").sticky({
    topSpacing: 0,
    zIndex: 1,
  });
});
