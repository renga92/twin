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

  $("#sticky-header").sticky({
    topSpacing: 0,
    zIndex: 1,
  });
});
