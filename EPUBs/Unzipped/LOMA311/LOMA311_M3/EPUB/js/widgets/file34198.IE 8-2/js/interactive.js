(function () {
    document.addEventListener("DOMContentLoaded", function() {
        var container = document.querySelector('.interactive-container');
        var questions = slice(document.querySelectorAll('div.question'));
        var radioBtns = slice(document.querySelectorAll('li[role="radio"]'));
        var nxtBtn = document.querySelector('button.next');
        var activeQuestion = document.querySelector('div.active');
        var fbContainer = document.querySelector('div.feedback-container');
        var qIter = 0;
        var answers = [1, 1, 0, 0, 1];
        var i;

        var keyCodes = {
            "left": 37,
            "up": 38,
            "right": 39,
            "down": 40,
            "pageUp": 33,
            "pageDown": 34,
            "end": 35,
            "home": 36,
            "space": 32,
            "enter": 13,
            "tab": 9,
            "escape": 27
        };

        nxtBtn.addEventListener("keydown", buttons, true);
        nxtBtn.addEventListener("click", buttons, true);

        for (i = 0; i < radioBtns.length; i++) {
            radioBtns[i].addEventListener("keydown", checkAnswer, false);
            radioBtns[i].addEventListener("click", checkAnswer, false);
        }

        function findAncestor(el, type, selector) {
            if (type == 'class') {
                while ((el = el.parentNode) && !el.classList.contains(selector));
        
                return el;
            }
            else if (type == 'node') {
                while ((el = el.parentNode) && el.tagName != selector);
                
                return el;
            }
            else if (type == 'id') {
                while ((el = el.parentNode) && el.getAttribute('id') != selector);
                
                return el;
            }
        }

        function slice(nodes) {
            return Array.prototype.slice.call(nodes);
        }

        function buttons(event) {
            if (event.type == 'click' || (event.type == 'keydown' && (event.keyCode == keyCodes.space || event.keyCode == keyCodes.enter))) {
                fbContainer.innerHTML = "";
                fbContainer.classList.remove('correct');
                fbContainer.classList.remove('incorrect');
                // update the index for the question list
                qIter++;
                // make sure we're not on the last question
                if (qIter == questions.length - 1) {
                    nxtBtn.innerHTML = "Review All Statments";
                }
                if (qIter < questions.length) { 
                    nextQuestion();
                }
                else if (qIter == questions.length) {
                    review();
                }
            }
        }

        function nextQuestion() {
            // remove active class from current question
            activeQuestion.classList.remove('active');
            // update the activeQuestion with the new question 
            activeQuestion = questions[qIter];
            activeQuestion.classList.add('active');
        }

        function review() {
            container.classList.add('review');
            
            var choices = slice(container.querySelectorAll('li[role="radio"]'));

            for (i = 0; i < radioBtns.length; i++) {
                radioBtns[i].removeEventListener("keydown", checkAnswer, false);
                radioBtns[i].removeEventListener("click", checkAnswer, false);
                radioBtns[i].removeAttribute('tabindex');
            }

            console.log(choices.length);
            // remove markers from all choices
            // 
            for (i = 0; i < choices.length; i++) {
                var correct = document.createElement('img');
                correct.setAttribute('src', 'imgs/correct.svg');
                correct.setAttribute('alt', 'correct');
                correct.setAttribute('class', 'marker');

                if (choices[i].getAttribute('data-grade') == 'incorrect' && choices[i].querySelector('.marker')) {
                    choices[i].querySelector('span').removeChild(choices[i].querySelector('.marker'));
                }
                else if (choices[i].getAttribute('data-grade') == 'correct' && !choices[i].querySelector('.marker')) {
                    choices[i].querySelector('span').appendChild(correct);
                }
                else if (choices[i].getAttribute('data-grade') == null && (i % 2 == 0)) {
                    var answerIndex = i * 0.5;
                    if (answers[answerIndex] == 0) {
                        choices[i].querySelector('span').appendChild(correct);
                    }
                    else {
                        choices[i + 1].querySelector('span').appendChild(correct);
                    }
                }
            }
        }

        function checkAnswer(event) {
            if (event.type == 'click' || (event.type == 'keydown' && (event.keyCode == keyCodes.space || event.keyCode == keyCodes.enter))) {
                fbContainer.innerHTML = "";
                var element = event.currentTarget;
                var elClass = element.classList;
                var elParent = findAncestor(element, 'class', 'choices');
                var choices = slice(elParent.querySelectorAll('li'));
                var correct = document.createElement('img');
                var incorrect = document.createElement('img');
                var answer = 0;
                var feedback;

                // set attributes for correct/incorrect markers
                correct.setAttribute('src', 'imgs/correct.svg');
                correct.setAttribute('alt', 'correct');
                correct.setAttribute('class', 'marker');
                incorrect.setAttribute('src', 'imgs/incorrect.svg');
                incorrect.setAttribute('alt', 'incorrect');
                incorrect.setAttribute('class', 'marker');

                // remove the grade attribute from 
                // other choices if they were
                // already selected
                /*for (i = 0; i < choices.length; i++) {
                    choices[i].removeAttribute('data-grade');
                }*/

                // if event target has pro class,
                // change answer to 1
                if (elClass == "pro") {
                    answer = 1;
                }

                // add data-attr and img marker 
                // for correct or incorrect
                if (answer == answers[qIter]) {
                    element.setAttribute('data-grade', 'correct');
                    element.querySelector('span').appendChild(correct);
                    fbContainer.classList.remove('incorrect');
                    fbContainer.classList.add('correct');
                    if (element.nextElementSibling) {
                        element.nextElementSibling.setAttribute('data-grade', 'incorrect');
                    }
                    else if (element.previousElementSibling) {
                        element.previousElementSibling.setAttribute('data-grade', 'incorrect');
                    }
                    //feedback = '<span class="cor">Correct!</span> ';
                }
                else {
                    element.setAttribute('data-grade', 'incorrect');
                    element.querySelector('span').appendChild(incorrect);
                    fbContainer.classList.remove('correct');
                    fbContainer.classList.add('incorrect');
                    if (element.nextElementSibling) {
                        element.nextElementSibling.setAttribute('data-grade', 'correct');
                    }
                    else if (element.previousElementSibling) {
                        element.previousElementSibling.setAttribute('data-grade', 'correct');
                    }
                    //feedback = '<span class="incor">Sorry, that\'s in correct.</span> ';
                }

                // build feedback
                feedback = activeQuestion.querySelector(".feedback").innerHTML;
                //feedback += remediation;
                var fbPara = document.createElement('p');
                fbPara.innerHTML = feedback;
                fbContainer.appendChild(fbPara);
            }
        }
    });
    
})();