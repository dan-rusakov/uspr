if (document.querySelector('.main-filter__slider-number')) {
  const numbers = document.querySelectorAll('.main-filter__slider-number');

  for(let i = 0; i < numbers.length; i++) {
      numbers[i].value = Number(numbers[i].value).toLocaleString();
  }

  $(document).on('mse2_load', function() {
    for(let n = 0; n < numbers.length; n++) {
      if (!isNaN(Number(numbers[n].value))) {
        numbers[n].value = Number(numbers[n].value).toLocaleString();
      }
    }
  });
}
