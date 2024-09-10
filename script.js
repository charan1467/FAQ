var questions = document.querySelectorAll(".question");
var answers = document.querySelectorAll(".answer");

questions.forEach(function (question, index) {
    var plusIcon = question.querySelector(".plus-img");
    var minusIcon = question.querySelector(".neg-img");

    question.addEventListener('click', function () {
        if (answers[index].classList.contains('show-answer')) {
            answers[index].classList.remove('show-answer');
            plusIcon.classList.remove('hide-icon');
            minusIcon.classList.add('hide-icon');
        } else {
            answers[index].classList.add('show-answer');
            plusIcon.classList.add('hide-icon');
            minusIcon.classList.remove('hide-icon');
        }
    });
});
