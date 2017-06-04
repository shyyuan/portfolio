console.log('Final Project: Portfolio js file is connected');
// Window onloader ***********************************
$(function(){
  // Event Listener
  $('#homeLink').on('click', UI.initLoad);
  $('#workLink').on('click', UI.setWork);
  $('#projectsLink').on('click', UI.setProjects);
  $('#trainingLink').on('click', UI.setTrainings);
}) /// End of Window onload **************************




// UI object, put all functions that affect the DOM
var UI = {
  initLoad: function() {
    $('#aboutMe').children().show();
    $('#trainings').children().hide();
    $('#projects').children().hide();
    $('#workExperience').children().hide();
  },

  setTrainings: function(){
    console.log('show project accordion');
    $('#aboutMe').children().hide();
    $('#trainings').children().show();
    $('#projects').children().hide();
    $('#workExperience').children().hide();
  },

  setProjects: function(){
    console.log('show project accordion');
    $('#aboutMe').children().hide();
    $('#trainings').children().hide();
    $('#projects').children().show();
    $('#workExperience').children().hide();
  },

  setWork: function() {
    $('#aboutMe').children().hide();
    $('#trainings').children().hide();
    $('#projects').children().hide();
    $('#workExperience').children().show();
  }

} // END OF UI


// evoke the function
UI.initLoad();
