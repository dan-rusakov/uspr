if (document.querySelector('.apartment-page__calculator')) {
  const range = Array.from(document.querySelectorAll('.apartment-page__calculator-range'));
  const textInput = Array.from(document.querySelectorAll('.apartment-page__calculator-input'));

  range.forEach(inputItem => {
    inputItem.addEventListener('change', (evt) => {
      const textInput = evt.target.parentNode.parentNode.querySelector('.apartment-page__calculator-input');
      textInput.value = evt.target.value;
    });
  });

  textInput.forEach(inputItem => {
    inputItem.addEventListener('change', (evt) => {
      const range = evt.target.parentNode.querySelector('.apartment-page__calculator-range');
      range.value = evt.target.value;
    });
  });
}
