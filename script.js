// structure html
// top left has high score button, top right has timer, center has button to start quiz
// and container for questions and answers.  
// structure css
// connect html & css & javascript
// Define variables
// Create "displayQuestion" array
// Create button with event listner method() set up function to make the rules section disappear
// and the quiz section appear with first question and multiple choice answers.
// display question, choices, and timer
// When user selects an awnser, if its correct dispay "correct" and clear the question and 
// multiple choice then display the next question and multiple choice,
// if its wrong display "wrong", deduct 5 seconds from timer, and clear the question and 
// clear the question and multiple choice then display the next question
// Assign questions to "displayQuestion" array
// create "displayQQuestion" function
// display the first question when 
// Create "SetInterval" function.
// Start timer by calling a "SetInterval" function
// Create "checkQuizAwnser" button, add eventlistener,
// call checkQAwnser function when checkQuizAwnser button is pushed
// assign returned interval to "timerInterval"
// create "checkAwnser" array
// Assign correct awsners to "checkAwnser" array
// create "checkQAwnser" function
// display the first question by calling "displayQQuestion" function
// create "updateTimer" function
// call "updateTimer" function every second by the "setInterval" function, decreases 
// the timer by 1 second and updates the timer element on the page, and ends the game
// if the timer is less than or equeal to 0
// "displayQQuestion" function first clears previous question, then displays current
// question and its choices, appends it to h2 element or other header element.
// this function also adds event listener, calls "checkQAnswer" function, 
// and creates new button fore each choice

var displayQuestions = [
    {
        id: 1,
        displayQuestions: "What will the following code return: Boolean(10 > 9)?",
        choices: ["true", "false", "undefined", "NaN"],
        correctAnswer: "true"
    },
    {
        id: 2,
        displayQuestions: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseclick", "onchange", "onclick", "onmouseover"],
        correctAnswer: "onclick"
    },
    {
        id: 3,
        displayQuestions: "How do you create a function in JavaScript?",
        choices: ["function = myFunction()", "function myFunction()", "function:myFunction()", "myFunction function()"],
        correctAnswer: "function myFunction()"
    },
    {
        id: 4,
        displayQuestions: "How do you add a comment in a JavaScript?",
        choices: ["//This is a comment", "This is a comment", "<!--This is a comment-->", "# This is a comment"],
        correctAnswer: "//This is a comment"
    },
];

let yourScore = 0;
let currentQuestion = 0;
let timerInterval = 60;
let recordHighScore = document.getElementById("save-score");
let viewHighScore = document.getElementById("high-score");
let startButton = document.getElementById("start-button");
let timer = document.getElementById("timer");
let rulesSection = document.getElementById("rules-section")
let quizQuestions = document.getElementById("quiz-questions")
function startQuiz() {
    setInterval(function () {
        timerInterval = timerInterval - 1;
        timer.textContent = timerInterval;
    }, 1000);
    rulesSection.style.display = "none";
    displayQuestion()
}
startButton.addEventListener("click", function () {
    startQuiz()
});
function displayQuestion() {
    let h3 = document.createElement("h3")
    h3.textContent = displayQuestions[currentQuestion].displayQuestions
    quizQuestions.appendChild(h3)
    let ul = document.createElement("ul")

    for (let i = 0; i < displayQuestions[currentQuestion].choices.length; i++) {
        let li = document.createElement("li")
        li.textContent = displayQuestions[currentQuestion].choices[i]
        ul.appendChild(li)
        li.addEventListener("click", function () {
            console.log(li.textContent)

            if (li.textContent === displayQuestions[currentQuestion].correctAnswer) {
                yourScore = yourScore + 10
                console.log(yourScore)
            }
            else if (li.textContent !== displayQuestions[currentQuestion].correctAnswer) {
                yourScore = yourScore - 5
                console.log(yourScore)
            }
           quizQuestions.removeChild(h3)
           quizQuestions.removeChild(ul)
           currentQuestion = currentQuestion + 1
            displayQuestion()

        })
    }






    quizQuestions.appendChild(ul)

}