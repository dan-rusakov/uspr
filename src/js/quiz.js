if (document.querySelector('.quiz-box')){
  var quizBox = document.querySelector('.quiz-box');
  var quiz = quizBox.querySelectorAll('.quiz');
  var numOpenedQuiz = 0;
  var quizData = '';

  openQuiz(numOpenedQuiz);


  function openQuiz(quizNum){
    if(quizNum > 0){
      quiz[quizNum - 1].style.display = 'none';
    }
    quiz[quizNum].style.display = 'block';
    numOpenedQuiz++;
  }

  function getQuizData(evt){
    evt.preventDefault();
    quizData += '&' + $(this).serialize();
    console.log(quizData);
    openQuiz(numOpenedQuiz);
  }

  var quizArr = document.querySelectorAll('#quiz');
  for(var quizI = 0; quizI < quizArr.length; quizI++){
    quizArr[quizI].addEventListener('submit', getQuizData);
  }

  document.querySelector('#quizLast').addEventListener('submit', function(evt){
    evt.preventDefault();
    quizData += '&' + $(this).serialize();
    $.ajax({
      type: "POST",
      url: "assets/quiz.php",
      data: quizData
    }).done(function() {
      $(this).find("input").val("");
      $(".quiz").trigger("reset");
    });
    $.fancybox.getInstance().close();
    alert('Заявка успешно отправлена. В скором времени с вами свяжется наш менеджер по продажам!');
  });

}
