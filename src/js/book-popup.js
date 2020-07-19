if (document.querySelector('.apartment-page__book-popup-form')) {
  document.querySelector('.apartment-page__book-popup-form').addEventListener('submit', () => {
    $.ajax({
      type: "POST",
      url: "assets/book-object.php",
      data: $('.apartment-page__book-popup-input').serialize()
    }).done(function () {
      $('.apartment-page__book-popup-input').val("");
      $('.apartment-page__book-popup-btn').html('Заявка отправлена');
      $.fancybox.close();
    }).fail(function () {
      alert('Неизвестная ошибка, повторите отправку формы позже.')
    });
  });
}
