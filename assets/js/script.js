//initialize quiz variables
document.addEventListener('DOMContentLoaded', () => {});

//questions with image src paths
var questions = [{
        questionId: 1,
        question: "assets/images/badges/alloa-question.webp",
        optionA: "Alloa Athletic",
        optionB: "Beecraig Town",
        optionC: "Hench Hornets FC",
        correctOption: "Alloa Athletic",
        correctImage: "assets/images/badges/alloa-answer.webp"
    },
    {
        questionId: 2,
        question: "assets/images/badges/araguaina-question.webp",
        optionA: "Hereford United",
        optionB: "Araguaína Futebol",
        optionC: "Seattle Battle Cattle",
        correctOption: "Araguaína Futebol",
        correctImage: "assets/images/badges/araguaina-answer.webp"
    },
    {
        questionId: 3,
        question: "assets/images/badges/benevento-question.webp",
        optionA: "Salem Calcio",
        optionB: "Benevento Calcio",
        optionC: "Pendle Calcio",
        correctOption: "Benevento Calcio",
        correctImage: "assets/images/badges/benevento-answer.webp"
    },
    {
        questionId: 4,
        question: "assets/images/badges/burton-athletic.webp",
        optionA: "Carling City",
        optionB: "Weatherspoon Wanderers",
        optionC: "Burton Albion",
        correctOption: "Burton Albion",
        correctImage: "assets/images/badges/burton-athletic.webp"
    },
    {
        questionId: 5,
        question: "assets/images/badges/caravel-question.webp",
        optionA: "Independiente Caravel",
        optionB: "Piratas Negras Futbol",
        optionC: "Penzance Town",
        correctOption: "Independiente Caravel",
        correctImage: "assets/images/badges/caravel-answer.webp"
    },
    {
        questionId: 6,
        question: "assets/images/badges/changchun-yatai-question.webp",
        optionA: "Guangzhou FC",
        optionB: "Changchun Yatai FC",
        optionC: "Hebei FC",
        correctOption: "Changchun Yatai FC",
        correctImage: "assets/images/badges/changchun-yatai-answer.webp"
    },
    {
        questionId: 7,
        question: "assets/images/badges/espoli-question.webp",
        optionA: "Súper Pollos",
        optionB: "CD Espoli",
        optionC: "LDU Quito",
        correctOption: "CD Espoli",
        correctImage: "assets/images/badges/espoli-answer.webp"
    },
    {
        questionId: 8,
        question: "assets/images/badges/faetano-question.webp",
        optionA: "Tricky Trees Town",
        optionB: "Árvores Complicadas",
        optionC: "SC Faetano",
        correctOption: "SC Faetano",
        correctImage: "assets/images/badges/faetano-answer.webp"
    },
    {
        questionId: 9,
        question: "assets/images/badges/falubaz.webp",
        optionA: "Falubaz Zielona Góra",
        optionB: "Anaheim City",
        optionC: "Disneyland Fives",
        correctOption: "Falubaz Zielona Góra",
        correctImage: "assets/images/badges/falubaz.webp"
    },
    {
        questionId: 10,
        question: "assets/images/badges/feni-question.webp",
        optionA: "Dado SC",
        optionB: "Levy SC",
        optionC: "Feni SC",
        correctOption: "Feni SC",
        correctImage: "assets/images/badges/feni-answer.webp"
    },
    {
        questionId: 11,
        question: "assets/images/badges/hashtag-question.webp",
        optionA: "Hashtag United",
        optionB: "Influencers United",
        optionC: "The Team Formerly Known As Twitter United",
        correctOption: "Hashtag United",
        correctImage: "assets/images/badges/hashtag-answer.webp"
    },
    {
        questionId: 12,
        question: "assets/images/badges/kugsak-question.webp",
        optionA: "Sealpunch-72",
        optionB: "Kugsak-45",
        optionC: "Hakarl-02",
        correctOption: "Kugsak-45",
        correctImage: "assets/images/badges/kugsak-question.webp"
    },
    {
        questionId: 13,
        question: "assets/images/badges/likhopo-question.webp",
        optionA: "FC Maseru",
        optionB: "FC NHS",
        optionC: "FC Likhopo",
        correctOption: "FC Likhopo",
        correctImage: "assets/images/badges/likhopo-answer.webp"
    },
    {
        questionId: 14,
        question: "assets/images/badges/limon-question.webp",
        optionA: "Huracán CF",
        optionB: "Real Viento",
        optionC: "Limón FC",
        correctOption: "Limón FC",
        correctImage: "assets/images/badges/limon-answer.webp"
    },
    {
        questionId: 15,
        question: "assets/images/badges/lincoln-red-imps-question.webp",
        optionA: "Lincoln Red Imps",
        optionB: "Boston Crimson Gremlins",
        optionC: "Grimsby Scarlet Devils",
        correctOption: "Lincoln Red Imps",
        correctImage: "assets/images/badges/limon-answer.webp"
    },
    {
        questionId: 16,
        question: "assets/images/badges/missile-question.webp",
        optionA: "Missile FC",
        optionB: "ICBM FC",
        optionC: "Nucléaires FC",
        correctOption: "Missile FC",
        correctImage: "assets/images/badges/missile-answer.webp"
    },
    {
        questionId: 17,
        question: "assets/images/badges/newells-old-boys.webp",
        optionA: "Newell's Old Boys",
        optionB: "Norbert's Odd Bench",
        optionC: "Neville's Olympic Ball",
        correctOption: "Newell's Old Boys",
        correctImage: "assets/images/badges/newells-old-boys.webp"
    },
    {
        questionId: 18,
        question: "assets/images/badges/pavlikeni.webp",
        optionA: "Topka",
        optionB: "FC Grafichna Kolektsiya",
        optionC: "FC Pavlikeni",
        correctOption: "FC Pavlikeni",
        correctImage: "assets/images/badges/pavlikeni.webp"
    },
    {
        questionId: 19,
        question: "assets/images/badges/santa-claus-question.webp",
        optionA: "FC Lapland",
        optionB: "FC Santa Claus",
        optionC: "FC Naughty List",
        correctOption: "FC Santa Claus",
        correctImage: "assets/images/badges/santa-claus-answer.webp"
    },
    {
        questionId: 20,
        question: "assets/images/badges/santos-rsa-question.webp",
        optionA: "Clipart FC",
        optionB: "Jam FC",
        optionC: "Santos FC",
        correctOption: "Santos FC",
        correctImage: "assets/images/badges/santos-rsa-answer.webp"
    },
    {
        questionId: 21,
        question: "assets/images/badges/sheikh-russel.webp",
        optionA: "Sheikh Russel KC",
        optionB: "Sheikh David KC",
        optionC: "Sheikh Keith KC",
        correctOption: "Sheikh Russel KC",
        correctImage: "assets/images/badges/sheikh-russel.webp"
    },
    {
        questionId: 22,
        question: "assets/images/badges/sousa-question.webp",
        optionA: "Kaiju Verdy",
        optionB: "FC Toho",
        optionC: "Sousa Esporte Clube",
        correctOption: "Sousa Esporte Clube",
        correctImage: "assets/images/badges/sousa-answer.webp"
    },
    {
        questionId: 23,
        question: "assets/images/badges/tot-question.webp",
        optionA: "BT FC",
        optionB: "TOT SC",
        optionC: "TNS",
        correctOption: "TOT SC",
        correctImage: "assets/images/badges/tot-answer.webp"
    },
    {
        questionId: 24,
        question: "assets/images/badges/warriors-question.webp",
        optionA: "Warriors FC",
        optionB: "Gladiators FC",
        optionC: "Rocksteady FC",
        correctOption: "Warriors FC",
        correctImage: "assets/images/badges/warriors-answer.webp"
    },
    {
        questionId: 25,
        question: "assets/images/badges/watford-question.webp",
        optionA: "Winnipeg",
        optionB: "Welkin",
        optionC: "Watford",
        correctOption: "Watford",
        correctImage: "assets/images/badges/watford-answer.webp"
    },
    {
        questionId: 26,
        question: "assets/images/badges/sexypoyt-question.webp",
        optionA: "SexyPöxyt",
        optionB: "Espoo",
        optionC: "HöttPantts",
        correctOption: "SexyPöxyt",
        correctImage: "assets/images/badges/sexypoyt-answer.webp"
    }
]

// script to create and store local username
const sigupButton = document.getElementById('signup');

sigupButton.addEventListener('click', function (event) {
    event.preventDefault();
    let userName = document.getElementById('username-input').value;

    if (userName !== "") {
        localStorage.setItem('userName', userName);
        //switch out for something ingame
        alert(`Welcome ${userName}!`);
        console.log("player " + localStorage.getItem('userName'));
        document.getElementById("begin").style.display = "";
        document.getElementById("signup").style.display = "none";
    } else {
        alert("Username cannot be empty! Please enter a username.");
    }
});

// reveal game space
function startGame() {
    let gameStart = "starting game...";
    console.log(gameStart);
    // hide username input and show game space
    document.getElementById('signup-space').style.display = 'none';
    document.getElementById('badge-space').style.display = 'inline-block';
    document.getElementById('answer-space').style.display = 'inline-block';
    getQuestion();
}

// start game on begin button input
begin.addEventListener('click', function (event) {
    event.preventDefault();
    startGame();
});

let questionNumber = 0 //holds the current question number
let playerScore = 0 //holds the player score
let wrongAttempts = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question
let usedQuestionIds = []; //store used question IDs to avoid repeating same question image
let currentQuestion;

// pull random question from question array filtered by question IDs
function getRandomQuestion() {
    const filteredQuestions = questions.filter((question) => !usedQuestionIds.includes(question.questionId));
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    return filteredQuestions[randomIndex];
}

// reset state needs work!
function resetQuiz() {
    usedQuestionIds = [];
    questionNumber = 0;
    playerscore = 0;
    wrongAttempts = 0;
    document.getElementById("playAgainBtn").style.display = "none";
    startGame();
}

// load next question filtered by ID
function getQuestion(question) {
    document.getElementById("next").style.display = "none";
    // set max questions
    if (usedQuestionIds.length < 10) {
        questionNumber++;
        document.querySelector('.progress').value = questionNumber + "0";
        // send relevant question information to DOM by targeted elements
        currentQuestion = getRandomQuestion();
        usedQuestionIds.push(currentQuestion.questionId);
        //document.getElementById("question-placeholder").innerText = "question id: " + currentQuestion.questionId;
        document.getElementById("question-number").innerHTML = questionNumber;
        document.getElementById("player-score").innerHTML = playerScore;
        document.getElementById("question-badge").src = currentQuestion.question;
        document.getElementById("answer1").innerHTML = currentQuestion.optionA;
        document.getElementById("answer2").innerHTML = currentQuestion.optionB;
        document.getElementById("answer3").innerHTML = currentQuestion.optionC;
        // log used questions to the console
        console.log(usedQuestionIds);
        console.log(currentQuestion);
    } else {
        alert("Game Over! Thank you for playing.");
        document.getElementById("answer-space").style.display = "none";
        document.getElementById("playAgainBtn").style.display = "inline";
    }
}

// check answer to current question
function checkAnswer(event) {
    console.log(event.target.innerText)
    if (event.target.innerText === currentQuestion.correctOption) {
        console.log("Correct ", currentQuestion.correctOption),
        event.target.classList.add("correct");
        playerScore++;
        document.getElementById("question-badge").src = currentQuestion.correctImage;
        document.getElementById("player-score").innerHTML = playerScore;
        alert("Correct! " + currentQuestion.correctOption)
    } else {
        event.target.classList.add("incorrect");
        alert("Incorrect! The correct answer is " + currentQuestion.correctOption);
        wrongAttempts++;
        document.getElementById("question-badge").src = currentQuestion.correctImage;
        document.getElementById("wrong-attempts").innerHTML = wrongAttempts;
    }
    document.getElementById("next").style.display = "inline";
}

// calculate final score
function calculateScore() {
    
}