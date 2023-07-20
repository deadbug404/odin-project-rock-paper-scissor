const playerButtons = document.querySelectorAll('.container .right .playerChoices button');
const computerButtons = document.querySelectorAll('.container .right .computerChoices button');
const miscButtons = document.querySelectorAll('.container .left .misc button');
const startButton = document.querySelector('.container .left .misc #startButton');
const gameArea = document.getElementById('right');
let playerScore = document.querySelector('.container .left .score .playerScore');
let computerScore = document.querySelector('.container .left .score .computerScore');
let roundStatus = document.querySelector('.container .right .status');

playerButtons.forEach(element => {
    element.addEventListener('click', e => {
        playerButtons.forEach(element1 => {
            element1.classList.remove('chosen');
        });
        element.classList.toggle('chosen');

        let playerChoice = e.target.id;
        let computerChoice = getComputerChoice();

        let result = game(playerChoice,computerChoice);
        setStatus(result);
        let resultArr = result.split(' ');
        setPoints(resultArr[1]);
    })
});

function getComputerChoice(){
    const myArr = ['rock','paper','scissor'];
    let computerChoice = myArr[Math.floor(Math.random()*myArr.length)];
    setComputerChoice(computerChoice);
    return computerChoice;
}

function setComputerChoice(computerChoice){
    computerButtons.forEach(element => {
        element.classList.remove('chosen');
    });
    (computerChoice == 'rock') ? computerButtons[0].classList.toggle('chosen') : 
    (computerChoice == 'paper') ? computerButtons[1].classList.toggle('chosen') :
    computerButtons[2].classList.toggle('chosen');
}

function setPoints(result){
    let playerScoreArr = playerScore.textContent.split(' ');
    let computerScoreArr = computerScore.textContent.split(' ');
    let playerScoreArrValue = parseInt(playerScoreArr[1]);
    let computerScoreArrValue = parseInt(computerScoreArr[1]);

    (result == 'win!') ? playerScoreArrValue += 1: 
    (result == 'lose!') ? computerScoreArrValue += 1:
    (result == 'both') ? console.log('tie!') : console.log('weird value');

    playerScore.textContent = `Player: ${playerScoreArrValue}`;
    computerScore.textContent = `Computer: ${computerScoreArrValue}`;
}

function setStatus(currentStatus){
    roundStatus.textContent = `Status: ${currentStatus}`;
}

function game(playerChoice, computerChoice){
    switch(playerChoice){
        case 'rock':
            return (computerChoice == 'paper') ? `You lose! ${playerChoice} lose against ${computerChoice}` :
            (computerChoice == 'scissor') ? `You win! ${playerChoice} win against ${computerChoice}` :
            `Tie! both picked ${playerChoice}`;
        case 'paper':
            return (computerChoice == 'rock') ? `You win! ${playerChoice} win against ${computerChoice}` :
            (computerChoice == 'scissor') ? `You lose! ${playerChoice} lose against ${computerChoice}` :
            `Tie! both picked ${playerChoice}`;
        case 'scissor':
            return (computerChoice == 'rock') ? `You lose! ${playerChoice} lose against ${computerChoice}` :
            (computerChoice == 'paper') ? `You win! ${playerChoice} win against ${computerChoice}` :
            `Tie! both picked ${playerChoice}`;
    }
}

function startGame(){
    gameArea.classList.toggle('hide');
    startButton.disabled = true;
}