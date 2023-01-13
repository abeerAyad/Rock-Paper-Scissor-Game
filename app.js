let choices = [...document.querySelectorAll(".choices img")];
let playerChoice = document.querySelector(".player-choice img");
let computerChoice = document.querySelector(".computer-choice img");
let pScore = document.querySelector(".player-score p");
let cScore = document.querySelector(".computer-score p");

let playerHand;
 let computerHand ;
let randomHand;
let playerScore=0;
let computerScore = 0;

choices.forEach( choice => {

    choice.addEventListener("click",( e => {
        playerChoiceHand(e);
        computerChoiceHand();
        matchGame();
// score()


    }))
})


const playerChoiceHand = (e) => {
       playerHand = e.target.className;
       playerChoice.src = `img/${playerHand}Choice.png`;
}




let gameChoice = ['paper',"rock","scissor"];

const computerChoiceHand = () => {
    randomHand =Math.floor(Math.random()*gameChoice.length);
    computerChoice.src = `img/${gameChoice[randomHand]}Choice.png`;
    computerHand = gameChoice[randomHand];
}
  
let result = document.querySelector('.result h1');
const matchGame = () => {
    if(playerHand === computerHand) {
        result.textContent = "It's A Tie!";
        return;
    }

     // Check for rock
    if(playerHand === "rock" && computerHand === "scissor") {
        result.textContent = "You Win!!";
         playerScore++;
        score();
        return;

     // Check for paper
    } else if(playerHand === "paper" && computerHand === "rock") {
        result.textContent = "You Win!!";
        playerScore++;
        score();
        return;

     // Check for scissor    
    } else if(playerHand === "scissor" && computerHand === "paper") {
        result.textContent = "You Win!!";
        playerScore++;
        score();
        return;

    } else {
        result.textContent = "Computer Win!!";
        computerScore++;  
        score();
        return ;
    }

}

const score = () => {
        pScore.textContent =  playerScore;
   
        cScore.textContent =  computerScore;

}
