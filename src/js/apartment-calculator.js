if (document.querySelector('.apartment-page__calculator')) {
  const range = Array.from(document.querySelectorAll('.apartment-page__calculator-range'));
  const textInput = Array.from(document.querySelectorAll('.apartment-page__calculator-input'));

  range.forEach(inputItem => {
    inputItem.addEventListener('change', (evt) => {
      const textInput = evt.target.parentNode.parentNode.querySelector('.apartment-page__calculator-input');
      textInput.value = evt.target.value;
      setPayment();
    });

    const textInput = inputItem.parentNode.parentNode.querySelector('.apartment-page__calculator-input');
    textInput.value = inputItem.value;
  });

  textInput.forEach(inputItem => {
    inputItem.addEventListener('change', (evt) => {
      const range = evt.target.parentNode.querySelector('.apartment-page__calculator-range');
      range.value = evt.target.value;
      setPayment();
    });

    const range = inputItem.parentNode.querySelector('.apartment-page__calculator-range');
    range.value = inputItem.value;
  });

  let rateSber = 6.1;
  let rateVtb = 6.5;
  let rateRossel = 5.9;
  const apartmentPrice = document.querySelector('#apartment-price');
  const firstInstallment = document.querySelector('#first-installment');
  const mortgageDuration = document.querySelector('#mortgage-duration');
  const rateSberBox = document.querySelector('#rate-sber') || null;
  const rateVtbBox = document.querySelector('#rate-vtb') || null;
  const rateRosselBox = document.querySelector('#rate-rossel') || null;
  const paymentSberBox = document.querySelector('#payment-sber') || null;
  const paymentVtbBox = document.querySelector('#payment-vtb') || null;
  const paymentRosselBox = document.querySelector('#payment-rossel') || null;
  const familyMortgageInput = document.querySelector('#family-mortgage');
  const secondaryHousingInput = document.querySelector('#secondary-housing');
  const secondaryHousingText = document.querySelector('.apartment-page__checkbox-info-text');

  function monthlyPayment(rate) {
    const monthlyRate = +(rate / 1200);
    const monthlyMortgageDuration = mortgageDuration.value * 12;
    const payment = ((apartmentPrice.value - firstInstallment.value) * (
      monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, monthlyMortgageDuration) - 1))
    )).toFixed(0);

    if (payment < 0) {
      return 0;
    } else {
      return payment.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.');
    }
  }

  function setRate() {
    if (rateSberBox) {
      rateSberBox.textContent = rateSber + '%';
    }

    if (rateVtbBox) {
      rateVtbBox.textContent = rateVtb + '%';
    }

    if (rateRosselBox) {
      rateRosselBox.textContent = rateRossel + '%';
    }
  }

  function setPayment() {
    if (paymentSberBox) {
      paymentSberBox.textContent = 'от ' + monthlyPayment(rateSber) + 'р';
    }

    if (paymentVtbBox) {
      paymentVtbBox.textContent = 'от ' + monthlyPayment(rateVtb) + 'р';
    }

    if (paymentRosselBox) {
      paymentRosselBox.textContent = 'от ' + monthlyPayment(rateRossel) + 'р';
    }
  }

  familyMortgageInput.addEventListener('change', (evt) => {
    secondaryHousingInput.checked = false;
    secondaryHousingText.style.display = 'none';

    if (evt.target.checked) {
      rateSber = 4.7;
      rateVtb = 5.0;
      rateRossel = 4.7;
    } else {
      rateSber = 6.1;
      rateVtb = 6.5;
      rateRossel = 5.9;
    }

    setRate();
    setPayment();
  });

  secondaryHousingInput.addEventListener('change', (evt) => {
    familyMortgageInput.checked = false;

    if (evt.target.checked) {
      rateSber = 7.7;
      rateVtb = 7.9;
      rateRossel = 8.45;
      secondaryHousingText.style.display = 'block';
    } else {
      rateSber = 6.1;
      rateVtb = 6.5;
      rateRossel = 5.9;
      secondaryHousingText.style.display = 'none';
    }

    setRate();
    setPayment();
  });

  setRate();
  setPayment();
}
