let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let gameInstance = 1;

function getComputerChoice(){
    let choice = ["Rock","Paper","Scissor"];
    let choicePicked = choice[Math.floor(Math.random()*choice.length)];
    choicePicked = choicePicked.toUpperCase();
    return choicePicked;
}


let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function (e){
        playerChoice = e.target.id.toUpperCase();
    })
});

function playRound(player, computer){
    if(player === "ROCK"){
        if(computer === "SCISSOR"){
            playerScore++;
            return "You win! Rock beats scissor";
        }else if(computer === "PAPER"){
            computerScore++;
            return "You lose! Paper beats Rock";
        }else{
            return "Tie! both players picked Rock";
        }
    }else if(player === "PAPER"){
        if(computer === "ROCK"){
            playerScore++;
            return "You win! Paper beats Rock";
        }else if(computer === "SCISSOR"){
            computerScore++;
            return "You lose! Scissor beats Paper";
        }else{
            return "Tie! both players picked Paper";
        }
    }else{
        if(computer === "ROCK"){
            computerScore++;
            return "You lose! Rock beats Scissor";
        }else if(computer === "PAPER"){
            playerScore++;
            return "You win! Scissor beats Paper";
        }else{
            return "Tie! both players picked Scissor";
        }
    }
}

function game(){
    if(gameInstance == 1){
        let result = playRound(playerChoice,getComputerChoice());

        //updates text result
        let p = document.createElement('p');
        p.textContent = `Result: ${result}`;
        let resultDiv = document.querySelector('#result');
        let oldNode = document.getElementById('result').firstElementChild;
        resultDiv.replaceChild(p, oldNode);

        //update computer points
        let cpoints = document.createElement('p');
        cpoints.textContent = `Computer: ${computerScore}`;
        let cpointDiv = document.querySelector('#cpoint');
        let cpointNode = document.getElementById('cpoint').firstElementChild;
        cpointDiv.replaceChild(cpoints, cpointNode);

        //update player points
        let ppoints = document.createElement('p');
        ppoints.textContent = `Player: ${playerScore}`;
        let ppointDiv = document.querySelector('#ppoint');
        let ppointNode = document.getElementById('ppoint').firstElementChild;
        ppointDiv.replaceChild(ppoints, ppointNode);

        if(computerScore == 5 || playerScore == 5){
            let p = document.createElement('p');
            if(computerScore == 5){
                p.textContent = 'Sadly, the computer beats you :(';
            }else{
                p.textContent = 'You won!';
            }
            let winDiv = document.querySelector('#winner');
            let winnerNode = document.getElementById('winner').lastElementChild;
            winDiv.replaceChild(p,winnerNode)
            gameInstance = 0;
        }
    }else{
        if(confirm('The game is already finished. Do you want to play again?')){
            location.reload();
        }else{
        }
        
    }
        

}
