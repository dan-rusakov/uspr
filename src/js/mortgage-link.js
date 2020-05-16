if (document.querySelector('.mortgage-link')) {

  let mortgageLinkCounter = +sessionStorage.getItem('mortgageLink');
  const mortgageLink = document.querySelector('.mortgage-link');
  const mortgageBtn = document.querySelector('.mortgage-link__close');

  if (mortgageLinkCounter < 2) {
    mortgageLink.classList.add('mortgage-link--active');
  }

  mortgageBtn.addEventListener('click', () => {
    mortgageLink.classList.remove('mortgage-link--active');

    if (mortgageLinkCounter) {
      mortgageLinkCounter += 1;
    } else {
      mortgageLinkCounter = 1;
    }

    sessionStorage.setItem('mortgageLink', mortgageLinkCounter);
  });

}
