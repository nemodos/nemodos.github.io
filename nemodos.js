$(document).ready(function() {
  console.log("i'm drunk and you're insane...");
  $('#release').click(function() {
    $('#site_greeting').hide();
    $('#release').hide();
  });
  $('#fountain_pen').click(function() {
    $('#surprise').fadeIn(1000);
  });
});
