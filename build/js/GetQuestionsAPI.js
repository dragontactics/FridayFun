function Get5RandomQuestionFromOpenTBD() {
    disableOpenTBDBtn();
    disableClearBtn();
    $.ajax({
        url: 'https://opentdb.com/api.php?amount=5',
        method: 'GET',
        success: function (data) {
            var questions = data.results;
            var htmlResult = `<div class="grid">`;
            for (var i = 0; i < questions.length; i++) {
                htmlResult += `
                    <article>
                        <header> ${questions[i].type.toUpperCase()} </header>
                        <details>
                            <summary>${questions[i].question}</summary>
                            <strong>${questions[i].correct_answer}</strong>
                        </details>
                        <footer>
                            ${[...questions[i].incorrect_answers, questions[i].correct_answer].sort(() => Math.random() - 0.5)
                                .map(ans => `<li>${ans}</li>`).join('')}
                            </ul>
                        </footer>
                    </article>
                `;
            }
            htmlResult += "</div>";

            const questionsElement = document.getElementById("questions");
            questionsElement.innerHTML += htmlResult;
        }
    });
}

function Get5RandomQuestionFromTheTriviaAPI(){
    disableTriviaAPIBtn();
    disableClearBtn();
    $.ajax({
        url: 'https://the-trivia-api.com/v2/questions?limit=5',
        method: 'GET',
        success: function (data) {
            var htmlResult = `<div class="grid">`;
            for (var i = 0; i < data.length; i++) {
                htmlResult += `
                    <article>
                    <header> ${data[i].type.toUpperCase()} </header>
                        <details>
                            <summary>${data[i].question.text}</summary>
                            <strong>${data[i].correctAnswer}</strong>
                        </details>
                        <footer>
                            ${[...data[i].incorrectAnswers, data[i].correctAnswer].sort(() => Math.random() - 0.5)
                                .map(ans => `<li>${ans}</li>`).join('')}
                            </ul>
                        </footer>
                    </article>
                `;
            }
            htmlResult += "</div>";
            const questionsElement = document.getElementById("questions");
            questionsElement.innerHTML += htmlResult;
        }
    });
}

function clearQuestions(){
    const questionsElement = document.getElementById("questions");
    questionsElement.innerHTML = "";
    Get5RandomQuestionFromOpenTBD();
    Get5RandomQuestionFromTheTriviaAPI();
}


function disableOpenTBDBtn() {
  const openTBDBtn = document.getElementById("openTBDBtn");

  // disable
  openTBDBtn.disabled = true;

  // re-enable after a certain time (milliseconds)
  setTimeout(() => {
    openTBDBtn.disabled = false;
  }, 7000);
}

function disableTriviaAPIBtn() {
  const triviaAPIBtn = document.getElementById("triviaAPIBtn");

  // disable
  triviaAPIBtn.disabled = true;

  // re-enable after a certain time (milliseconds)
  setTimeout(() => {
    triviaAPIBtn.disabled = false;
  }, 7000);
}

function disableClearBtn() {
  const clearBtn = document.getElementById("clearBtn");

  // disable
  clearBtn.disabled = true;

  // re-enable after a certain time (milliseconds)
  setTimeout(() => {
    clearBtn.disabled = false;
  }, 7000);
}