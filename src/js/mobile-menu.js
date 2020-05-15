const burger = document.querySelector('.cd-primary-nav-trigger');

burger.addEventListener('click', () => {
  document.querySelector('.cd-menu-icon').classList.toggle('is-clicked');
  document.querySelector('.cd-header').classList.toggle('menu-is-open');
  document.querySelector('.cd-primary-nav').classList.toggle('is-visible');
  document.querySelector('body').classList.toggle('overflow-hidden');
});

$(".cd-primary-nav").click(function() {
  $("header").removeClass("menu-is-open");
  $(".cd-menu-icon").removeClass("is-clicked");
  $('.cd-primary-nav').removeClass('is-visible').one(
    'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    function(){
      $('body').removeClass('overflow-hidden');
    });
});
