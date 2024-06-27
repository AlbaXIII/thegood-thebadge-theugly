// script to create and store local username
let userName = document.getElementById('username-input').value;
let sigupButton = document.getElementById('signup');

signup.addEventListener('click', function(event)  {
    event.preventDefault();
    let userName = document.getElementById('username-input').value;
    localStorage.setItem('userName', userName);
    alert ("Welcome " + userName + "!")
    console.log("player " + localStorage.getItem('userName'));
});

// reveal game space
begin.addEventListener('click', function(event)  {
    event.preventDefault();
    startGame();
});

function startGame(){
    let gameStart = "starting game...";
    console.log(gameStart);
    document.getElementById('signup-space').style.display = 'none';
    document.getElementById('badge-space').style.display = 'inline-block';
    document.getElementById('answer-space').style.display = 'inline-block';
}

