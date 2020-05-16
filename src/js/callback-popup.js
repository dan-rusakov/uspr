if (document.querySelector('.callback')){

  let callbackCounter = +sessionStorage.getItem('callbackPopup');
  const callback = document.querySelector('.callback');

  if (callbackCounter < 2) {
    setTimeout(function(){
      callback.classList.add('callback--active');
    }, 12000);
  }

  callback.addEventListener('submit', function(evt){
    evt.preventDefault();
    $.ajax({
      type: "POST",
      url: "assets/callback.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $(".callback").trigger("reset");
      callback.style.display = 'none';
      alert('Заявка успешно отправлена. В скором времени с вами свяжется наш менеджер по продажам!');
    });
  });

  document.querySelector('.callback__close').addEventListener('click', function(){
    callback.classList.remove('callback--active');

    if (callbackCounter) {
      callbackCounter += 1;
    } else {
      callbackCounter = 1;
    }

    sessionStorage.setItem('callbackPopup', callbackCounter);
  });
}
