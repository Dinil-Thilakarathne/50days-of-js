const buttons = document.querySelectorAll("button");
const resultText = document.getElementById("resultText");
const playerScoreText = document.getElementById("playerScore")
const computerScoreText = document.getElementById("computerScore")

let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const result = playRound(button.id, computerPlay());
      resultText.textContent = result;
      playerScoreText.textContent = playerScore;
      computerScoreText.textContent = computerScore;
    });
});

computerPlay = () => {
    const choices = ["rock" , "paper" , "scissor"];
    return choices[Math.floor(Math.random()*choices.length)];
}

playRound = (playerChoice, computerChoice) => {
    if(playerChoice === computerChoice){
        return "Game tie";
    }else if (
        (playerChoice === "rock" && computerChoice ==="scissor") ||
        (playerChoice === "scissor" && computerChoice ==="paper") ||
        (playerChoice === "paper" && computerChoice ==="rock") 
    ){
        playerScore ++;
        console.log(`player score ${playerScore}`);
        return `you win ! ${playerChoice} beats ${computerChoice}`;
    }else{
        computerScore ++;
        console.log(`computer score ${computerScore}`);
        return `you lost ! ${computerChoice} beats ${playerChoice}`;
    }
}