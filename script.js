const playerButtons = document.querySelectorAll('.container .right .playerChoices button');
const computerButtons = document.querySelectorAll('.container .right .computerChoices button');
const miscButtons = document.querySelectorAll('.container .left .misc button');
const startButton = document.querySelector('.container .left .misc #startButton');
const validateResultArea = document.getElementById('right');
let playerScore = document.querySelector('.container .left .score .playerScore');
let computerScore = document.querySelector('.container .left .score .computerScore');
let roundStatus = document.querySelector('.container .right .status');
let totalGames = document.querySelector('.container .left .results .total-games');
let totalWins = document.querySelector('.container .left .results .total-wins');
let winrate = document.querySelector('.container .left .results .winrate');

playerButtons.forEach(element => {
    element.addEventListener('click', e => {
        game(e,element);
    })
});

function game(eventListener,currElement){
    playerButtons.forEach(element1 => {
        element1.classList.remove('chosen');
    });
    currElement.classList.toggle('chosen');

    let playerChoice = eventListener.target.id;
    let computerChoice = getComputerChoice();

    let result = validateResult(playerChoice,computerChoice);
    setStatus(result);
    let resultArr = result.split(' ');
    setScores(resultArr[1]);
    isGameOver();
}

function isGameOver(){
    let player = playerScore.textContent.split(' ');
    let computer = computerScore.textContent.split(' ');
    if(player[1] == '5' || computer[1] == '5'){
        setGameOver(player);
    }
}

function setGameOver(player){
    playerButtons.forEach(element1 => {
        element1.classList.remove('chosen');
    });
    computerButtons.forEach(element => {
        element.classList.remove('chosen');
    });
    playerScore.textContent = 'Player: 0';
    computerScore.textContent = 'Computer: 0';
    (player[1] == '5') ? roundStatus.textContent = 'You win! you beat the computer' :
    roundStatus.textContent = 'You lose to a computer, how embarassing!';

    let resultArr = roundStatus.textContent.split(' ');
    let result = resultArr[1];
    setStats(result);
}

function setStats(result){
    let totalGamesArr = totalGames.textContent.split(' ');
    let totalWinsArr = totalWins.textContent.split(' ');
    let totalGamesArrValue = parseInt(totalGamesArr[2]);
    let totalWinsArrValue = parseInt(totalWinsArr[2]);
    let winrateValue = 0;

    if(result == 'win!'){
        totalGamesArrValue += 1;
        totalWinsArrValue += 1;
        console.log('win');
        winrateValue = (totalWinsArrValue * 100) / totalGamesArrValue;
        winrateValue = winrateValue.toFixed(0);
    }else{
        totalGamesArrValue += 1;
        console.log('lose');
        winrateValue = (totalWinsArrValue * 100) / totalGamesArrValue;
        winrateValue = winrateValue.toFixed(0);
    }
    
    totalGames.textContent = `Total Games: ${totalGamesArrValue}`;
    totalWins.textContent = `Total Wins: ${totalWinsArrValue}`;
    winrate.textContent = `Winrate: ${winrateValue}%`;
}

function resetStats(){
    playerScore.textContent = 'Player: 0';
    computerScore.textContent = 'Computer: 0';
    totalWins.textContent = 'Total Wins: 0';
    totalGames.textContent = 'Total Game: 0';
    winrate.textContent = 'Winrate 0%';
    roundStatus.textContent = 'Status: Choose first';

    computerButtons.forEach(element => {
        element.classList.remove('chosen');
    });

    playerButtons.forEach(element1 => {
        element1.classList.remove('chosen');
    });
}

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

function setScores(result){
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

function validateResult(playerChoice, computerChoice){
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
    validateResultArea.classList.toggle('hide');
    startButton.disabled = true;
}