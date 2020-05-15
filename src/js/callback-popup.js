if (document.querySelector('.callback')){
  var callback = document.querySelector('.callback');

  setTimeout(function(){
    callback.style.display = 'block';
  }, 12000);

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
    callback.style.display = 'none';
  });
}
