$('.apartment-page__gallery').owlCarousel({
  loop: false,
  nav: true,
  items: 1,
  navText: [
    `<svg width="32" height="32" class="apartment-page__gallery-icon">
        <use xlink:href="#icon-arrow-left"></use>
    </svg>`,
    `<svg width="32" height="32" class="apartment-page__gallery-icon">
        <use xlink:href="#icon-arrow-right"></use>
    </svg>`
  ],
});
