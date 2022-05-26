$('#hamburger').on('click', function(event) {
  event.preventDefault();
  $('.nav-right').toggleClass('hamburger-active');
  $('main').toggleClass('disable-main');
});

$('main').on('click', function(event) {
  event.preventDefault();
  $('.nav-right').toggleClass('hamburger-active');
  $('main').toggleClass('disable-main');
});