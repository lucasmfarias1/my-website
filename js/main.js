let currentPage = 'stack';

const switchPage = (e) => {
  if (e.target.className == 'nav__link nav__active') {
    return;
  }

  $('.nav__link').unbind('click');
  
  const idPageToClose = $('.nav__active').data('target');
  const idPageToOpen = $(event.target).data('target');
  
  $(`#${idPageToClose}`).slideUp('fast', () => {
    $(`#${idPageToOpen}`).slideDown('fast', () => {
      $(`#${idPageToClose}-link`).removeClass('nav__active');
      $(`#${idPageToOpen}-link`).addClass('nav__active');
      $(".nav__link").click(switchPage);
    });
  });
}

$(".nav__link").click(switchPage);

$(".nav__menu-toggle img").click(() => {
  $(".nav__link").slideToggle();
});