if (document.querySelector('.apartment-page__description-tabs')) {
  const tabBtns = Array.from(document.querySelectorAll('.apartment-page__description-tab-btn'));
  const tabs = Array.from(document.querySelectorAll('.apartment-page__description-tab'));

  tabBtns.forEach((item, index) => {
    item.addEventListener('click', () => {
      document.querySelector('.apartment-page__description-tab-btn--active').classList.remove('apartment-page__description-tab-btn--active');
      document.querySelector('.apartment-page__description-tab--active').classList.remove('apartment-page__description-tab--active');

      tabBtns[index].classList.add('apartment-page__description-tab-btn--active');
      tabs[index].classList.add('apartment-page__description-tab--active');
    });
  })
}
