//initialize quiz variables
document.addEventListener('DOMContentLoaded', () => {
  });
  
// script to create and store local username
let userName = document.getElementById('username-input').value;
let sigupButton = document.getElementById('signup');

signup.addEventListener('click', function (event) {
    event.preventDefault();
    let userName = document.getElementById('username-input').value;
    localStorage.setItem('userName', userName);
    alert("Welcome " + userName + "!")
    console.log("player " + localStorage.getItem('userName'));
});

// reveal game space
function startGame() {
    let gameStart = "starting game...";
    console.log(gameStart);
    document.getElementById('signup-space').style.display = 'none';
    document.getElementById('badge-space').style.display = 'inline-block';
    document.getElementById('answer-space').style.display = 'inline-block';
}

begin.addEventListener('click', function (event) {
    event.preventDefault();
    startGame();
});

//questions with image paths
var questions = [
    {
        question: "assets/images/badges/alloa-question.webp",
        optionA: "Alloa Athletic",
        optionB: "Beecraig Town",
        optionC: "Hench Hornets FC",
        correctOption: "optionA",
        correctImage: "assets/images/badges/alloa-answer.webp"
    },
    {
        question: "assets/images/badges/araguaina-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/araguaina-answer.webp"
    },
    {
        question: "assets/images/badges/benevento-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/benevento-answer.webp"
    },
    {
        question: "assets/images/badges/burton-athletic.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/burton-athletic.webp"
    },
    {
        question: "assets/images/badges/caravel-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/caravel-answer.webp"
    },
    {
        question: "assets/images/badges/changchun-yatai-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/changchun-yatai-answer.webp"
    },
    {
        question: "assets/images/badges/espoli-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/espoli-answer.webp"
    },
    {
        question: "assets/images/badges/faetano-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/faetano-answer.webp"
    },
    {
        question: "assets/images/badges/falubaz.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/falubaz.webp"
    },
    {
        question: "assets/images/badges/feni-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/feni-answer.webp"
    },
    {
        question: "assets/images/badges/hashtag-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/hashtag-answer.webp"
    },
    {
        question: "assets/images/badges/kugsak-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/kugsak-question.webp"
    },
    {
        question: "assets/images/badges/likhopo-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/likhopo-answer.webp"
    },
    {
        question: "assets/images/badges/limon-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/limon-answer.webp"
    },
    {
        question: "assets/images/badges/lincoln-red-imps-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/limon-answer.webp"
    },
    {
        question: "assets/images/badges/newells-old-boys.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/newells-old-boys.webp"
    },
    {
        question: "assets/images/badges/pavlikeni.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/pavlikeni.webp"
    },
    {
        question: "assets/images/badges/santa-claus-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/santa-claus-answer.webp"
    },
    {
        question: "assets/images/badges/santos-rsa-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/santos-rsa-answer.webp"
    },
    {
        question: "assets/images/badges/sheikh-russel.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/sheikh-russel.webp"
    },
    {
        question: "assets/images/badges/sousa-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/sousa-answer.webp"
    },
    {
        question: "assets/images/badges/tot-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/tot-answer.webp"
    },
    {
        question: "assets/images/badges/vihar.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/vihar.webp"
    },
    {
        question: "assets/images/badges/warriors-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/warriors-answer.webp"
    },
    {
        question: "assets/images/badges/watford-question.webp",
        optionA: "test",
        optionB: "test",
        optionC: "test",
        correctOption: "test",
        correctImage: "assets/images/badges/watford-answer.webp"
    }
]

function getRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }

let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

function nextQuestion() {
    const currentQuestion = getRandomQuestion();
    document.getElementById("question-number").innerHTML = questionNumber;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("question-badge").src = currentQuestion.question;
    document.getElementById("answer1").innerHTML = currentQuestion.optionA;
    document.getElementById("answer2").innerHTML = currentQuestion.optionB;
    document.getElementById("answer3").innerHTML = currentQuestion.optionC;
}


