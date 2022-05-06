let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const lizard_div = document.getElementById('lizard');
const spock_div = document.getElementById('spock');


// this function will use math.random to get the computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

// sets title case
function convertCase(guestChoice) {
    if (guestChoice === 'paper') return 'Paper';
    if (guestChoice === 'scissors') return 'Scissors';
    if (guestChoice === 'rock') return 'Rock';
    if (guestChoice === 'lizard') return 'Lizard';
    return 'Spock';
}

// Winning condition
function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertCase(user) + " beats " + convertCase(computer) + ". You win!";
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('winningStyles');
    setTimeout(() => roundStatus.classList.remove('winningStyles'), 500);
}

// Losing condition
function loses(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertCase(user) + " gets beaten by " + convertCase(computer) + ". You lose.";
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('losingStyles');
    setTimeout(() => roundStatus.classList.remove('losingStyles'), 500);
}

// Draw condition
function draw(user, computer) {
    result_div.innerHTML = "You both chose " + convertCase(user) + ". Its a draw.";
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('drawStyles');
    setTimeout(() => roundStatus.classList.remove('drawStyles'), 500);
}

// The logic - who beats who
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'rocklizard':
        case 'paperrock':
        case 'paperspock':
        case 'scissorlizard':
        case 'scissorspaper':
        case 'lizardspock':
        case 'lizardpaper':
        case 'spockrock':
        case 'spockscissor':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'rockspock':
        case 'paperlizard':
        case 'paperscissors':
        case 'scissorsrock':
        case 'scissorspock':
        case 'lizardrock':
        case 'lizardscissor':
        case 'spockpaper':
        case 'spocklizard':
            loses(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
        case 'lizardlizard':
        case 'spockspock':
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function () {
        game('rock');
    });

    paper_div.addEventListener('click', function () {
        game('paper');
    });

    scissors_div.addEventListener('click', function () {
        game('scissors');
    });

    lizard_div.addEventListener('click', function () {
        game('lizard');
    });

    spock_div.addEventListener('click', function() {
        game('spock');
    });
}

main();