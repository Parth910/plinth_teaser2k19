$(document).ready(function() {
 
    // Fakes the loading setting a timeout
      setTimeout(function() {
          $('body').addClass('loaded');
      }, 600);

      $("#ul").hide();

    // Show the div in 5s
    $("#ul").delay(3000).fadeIn(500);
  });
  