$(document).ready(function() {
  $('.post-header').css('margin-left', $('.post-header').offset().left * -1);
  $('.post-header').css('margin-right', ($(window).width() - ($('.post-header').offset().left + $('.post-header').outerWidth())) * -1);
})