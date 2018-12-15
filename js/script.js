$(document).ready(function () {
  // init sidenav
  $('.button-collapse').sideNav();

  // init carousel
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });

  // init modal
  $('.modal').modal();

  // init select
  $('select').material_select();
});