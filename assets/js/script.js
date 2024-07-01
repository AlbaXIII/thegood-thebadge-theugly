//initialize quiz variables
document.addEventListener('DOMContentLoaded', () => {
    nextButton.classList.add('hide'); // Initially hide the 'Next' button
  });
  
const startButton = document.getElementById('begin');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('answer-space');
const questionElement = document.getElementById('badge-space');
const answerButtonsElement = document.getElementById('answer-input');
  
let shuffledQuestions, currentQuestionIndex;

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
begin.addEventListener('click', function (event) {
    event.preventDefault();
    startGame();
});

function startGame() {
    let gameStart = "starting game...";
    console.log(gameStart);
    document.getElementById('signup-space').style.display = 'none';
    document.getElementById('badge-space').style.display = 'inline-block';
    document.getElementById('answer-space').style.display = 'inline-block';
}

// declare badge variables
let alloaQuestion = new Image();
alloaQuestion.src = 'assets/images/badges/alloa-question.webp';
let alloaAnswer = new Image();
alloaAnswer.src = 'assets/images/badges/alloa-answer.webp';
let araguainaQuestion = new Image();
araguainaQuestion.src = 'assets/images/badges/araguaina-question.webp';
let araguainaAnswer = new Image();
araguainaAnswer.src = 'assets/images/badges/araguaina-answer.webp';
let beneventoQuestion = new Image();
beneventoQuestion.src = 'assets/images/badges/benevento-question.webp';
let beneventoAnswer = new Image ();
beneventoAnswer.src = 'assets/images/badges/benevento-answer.webp';
let burtonQuestion = new Image();
burtonQuestion.src = 'assets/images/badges/burton-athletic.webp';
let burtonAnswer = new Image();
burtonAnswer.src = 'assets/images/badges/burton-athletic.webp';
let caravelQuestion = new Image();
caravelQuestion.src = 'assets/images/badges/caravel-question.webp';
let caravelAnswer = new Image();
caravelAnswer.src = 'assets/images/badges/caravel-answer.webp';
let changchunQuestion = new Image();
changchunQuestion.src = 'assets/images/badges/changchun-yatai-question.webp';
let changchunAnswer = new Image();
changchunAnswer.src = 'assets/images/badges/changchun-yatai-question.webp';
let espoliQuestion = new Image();
espoliQuestion.src = 'assets/images/badges/espoli-question.webp';
let espoliAnswer = new Image();
espoliAnswer.src = 'assets/images/badges/espoli-answer.webp';
let faetanoQuestion = new Image();
faetanoQuestion.src = 'assets/images/badges/faetano-question.webp';
let faetanoAnswer = new Image();
faetanoAnswer.src = 'assets/images/badges/faetano-answer.webp';
let falubazQuestion = new Image();
falubazQuestion.src = 'assets/images/badges/falubaz.webp';
let falubazAnswer = new Image();
falubazAnswer.src = 'assets/images/badges/falubaz.webp';
let feniQuestion = new Image();
feniQuestion.src = 'assets/images/badges/feni-question.webp';
let feniAnswer = new Image();
feniAnswer.src = 'assets/images/badges/faetano-answer.webp';
let hashtagQuestion = new Image();
hashtagQuestion.src = 'assets/images/badges/hashtag-question.webp';
let hashtagAnswer = new Image();
hashtagAnswer.src = 'assets/images/badges/hashtag-answer.webp';
let kugsakQuestion = new Image();
kugsakQuestion.src = 'assets/images/badges/kugsak-question.webp';
let kugsakAnswer = new Image();
kugsakAnswer.src = 'assets/images/badges/kugsak-answer.webp';
let likhopoQuestion = new Image();
likhopoQuestion.src = 'assets/images/badges/likhopo-question.webp';
let likhopoAnswer = new Image();
likhopoAnswer.src = 'assets/images/badges/likhopo-answer.webp';
let limonQuestion = new Image();
limonQuestion.src = 'assets/images/badges/limon-question.webp';
let limonAnswer = new Image();
limonAnswer.src = 'assets/images/badges/limon-answer.webp';
let lincolnQuestion = new Image();
lincolnQuestion.src = 'assets/images/badges/lincoln-red-imps-question.webp';
let lincolnAnswer = new Image();
lincolnAnswer.src = 'assets/images/badges/lincoln-red-imps-answer.webp';
let missileQuestion = new Image();
missileQuestion.src = 'assets/images/badges/missile-question.webp';
let missileAnswer = new Image();
missileAnswer.src = 'assets/images/badges/missile-answer.webp';
let nobQuestion = new Image();
nobQuestion.src = 'assets/images/badges/newells-old-boys.webp';
let nobAnswer = new Image();
nobAnswer.src = 'assets/images/badges/newells-old-boys.webp';
let pavlikeniQuestion = new Image();
pavlikeniQuestion.src = 'assets/images/badges/pavlikeni.webp';
let pavlikeniAnswer = new Image();
pavlikeniAnswer.src = 'assets/images/badges/pavlikeni.webp';
let santaQuestion = new Image();
santaQuestion.src = 'assets/images/badges/santa-claus-question.webp';
let santaAnswer = new Image();
santaAnswer.src = 'assets/images/badges/santa-claus-answer.webp';
let santosQuestion = new Image();
santosQuestion.src = 'assets/images/badges/santos-rsa-question.webp';
let santosAnswer = new Image();
santosAnswer.src = 'assets/images/badges/santos-rsa-answer.webp';
let sheikhQuestion = new Image();
sheikhQuestion.src = 'assets/images/badges/sheikh-russel.webp';
let sheikhAnswer = new Image();
sheikhAnswer.src = 'assets/images/badges/sheikh-russel.webp';
let sousaQuestion = new Image();
sousaQuestion.src = 'assets/images/badges/sousa-question.webp';
let sousaAnswer = new Image();
sousaAnswer.src = 'assets/images/badges/sousa-answer.webp';
let totQuestion = new Image();
totQuestion.src = 'assets/images/badges/tot-question.webp';
let totAnswer = new Image();
totAnswer.src = 'assets/images/badges/tot-answer.webp';
let viharQuestion = new Image();
viharQuestion.src = 'assets/images/badges/vihar.webp';
let viharAnswer = new Image();
viharAnswer.src = 'assets/images/badges/vihar.webp';
let warriorsQuestion = new Image();
warriorsQuestion.src = 'assets/images/badges/warriors-question.webp';
let warriorsAnswer = new Image();
warriorsAnswer.src = 'assets/images/badges/warriors-answer.webp';
let watfordQuestion = new Image();
watfordQuestion.src = 'assets/images/badges/watford-question.webp';
let watfordAnswer = new Image();
watfordAnswer.src = 'assets/images/badges/watford-answer.webp';

//push images to array for questions to be called
var badges = [];
badges.push(alloaQuestion, alloaAnswer, araguainaQuestion, araguainaAnswer, beneventoQuestion, beneventoAnswer,
    burtonQuestion, burtonAnswer, caravelQuestion, caravelAnswer, changchunQuestion, changchunAnswer,
    espoliQuestion, espoliAnswer, faetanoQuestion, faetanoAnswer, falubazQuestion, falubazQuestion,
    feniQuestion, feniAnswer, hashtagQuestion, hashtagAnswer, kugsakQuestion, kugsakQuestion,
    likhopoQuestion, likhopoAnswer, limonQuestion, limonAnswer, lincolnQuestion, lincolnAnswer,
    missileQuestion, missileAnswer, nobQuestion, nobAnswer, pavlikeniQuestion, pavlikeniAnswer,
    santaQuestion, santaAnswer, sheikhQuestion, sheikhAnswer, santosQuestion, santosAnswer, 
    sousaQuestion, sousaAnswer, totQuestion, totAnswer, viharQuestion, viharAnswer, warriorsQuestion, warriorsAnswer,
    watfordQuestion, warriorsAnswer
);

//test function to show images successfully displaying in div
function showBadge() {
    const random = Math.floor(Math.random() * badges.length);
    document.getElementById('badge-space').appendChild(badges[random]);
}

//questions 
const myQuestions = [
    {
      question: alloaQuestion,
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c",
      correctImage: alloaAnswer
    }]

function buildQuiz(){}
