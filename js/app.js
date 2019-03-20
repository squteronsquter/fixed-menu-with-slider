$('.footer-nav-menu-item').on('click', function() {
  var label = $(this).attr('data-label');
  $('.panel-header').text(label);
  $('.panel').addClass('active');
});

$('.panel-close').on('click', function() {
  $('.panel').removeClass('active');
});
$('a').on('click', function() {
  $('.panel').removeClass('active');
});
