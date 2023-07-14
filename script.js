function getComputerChoice(){
    let choice = ['rock','paper','scissor'];

    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function getPlayerChoice(){
    let playerChoice = prompt('Pick your choice: Rock Paper Scissor');
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case 'rock':
            return (computerSelection == 'paper') ?  'You lose! paper beats rock' :
                   (computerSelection == 'scissor') ?  'You win! rock beats scissor' :
                    'Tie! Both picked rock';
        case 'paper':
            return (computerSelection == 'rock') ?  'You win! paper beats rock' :
                   (computerSelection == 'scissor') ?  'You lose! scissor beats paper' :
                    'Tie! Both picked paper';
        case 'scissor':
            return (computerSelection == 'rock') ?  'You lose! rock beats scissor' :
                   (computerSelection == 'paper') ?  'You win! scissor beats paper' :
                    'Tie! Both picked scissor';
        default:
            return 'You can only choose: Rock Paper Scissor';

    }
}

function validateWinner(result){
    if(result == 'win!'){
        return 'player';
    }else if(result == 'lose!'){
        return 'computer';
    }else if(result == 'can'){
        return 'wrong';
    }else{
        return 'tie';
    }
}

function checkWinner(playerScore,computerScore){
    if(playerScore > computerScore ){
        console.log('Congratulations! You beat the computer');
    }else if(playerScore < computerScore){
        console.log('What a shame! You lost to a computer');
    }else{
        console.log('I didn\'t know it\'s possible but its a tie!')
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0;i<5;i++){
        let result = '';
        result = playRound(getPlayerChoice(),getComputerChoice());
        console.log(result);

        let myArray = result.split(" ");
        let whoWin = validateWinner(myArray[1]);

        if(whoWin == 'player'){
            playerScore++;
        }else if(whoWin == 'computer'){
            computerScore ++;
        }else if(whoWin == 'wrong'){
            console.log("Wrong choice score will be given to computer");
            computerScore++;
        }else{
            playerScore++;
            computerScore++;
        }

        console.log(`Scores:
        Player: ${playerScore}
        Computer: ${computerScore}`);
    }

    checkWinner(playerScore,computerScore);
}

game();
