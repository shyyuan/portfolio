console.log('Final Project: Portfolio js file is connected');
// Window onloader ***********************************
$(function(){
  // Event Listener
  $('#homeLink').on('click', UI.setHome);
  $('#worskLink').on('click', UI.setWork);
  $('#projectsLink').on('change', UI.setProjects);

}) /// End of Window onload **************************




// UI object, put all functions that affect the DOM
var UI = {
  initLoad: function() {
    // hide some elements
    $('#projects').children().hide();
  }
} // END OF UI


// evoke the function
UI.initLoad();
