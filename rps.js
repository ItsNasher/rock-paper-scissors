const input = document.querySelector('.input');
const result = document.getElementById('result');
const humanscoreHTML = document.getElementById('humanscore');
const computerscoreHTML = document.getElementById('computerscore');
const choices = ["rock", "paper", "scissors"];
let humanscore = 0;
let computerscore = 0;

input.addEventListener('keypress', function(e){
    if (e.key == 'Enter'){
        gameTurn();
    }
})

function gameTurn (){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const playerChoice = input.value.toLowerCase(); // So that if the player types again, it will be updated.
    if (playerChoice == "rock" && computerChoice == "scissors" ||
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissors" && computerChoice == "paper"){
            humanscoreHTML.textContent = `You: ${++humanscore}`;
            computerscoreHTML.textContent = `AI: ${computerscore}`;
            result.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}, Player wins!`;
    }
    else if (playerChoice == computerChoice){
        humanscoreHTML.textContent = `You: ${humanscore}`;
        computerscoreHTML.textContent = `AI: ${computerscore}`;
        result.textContent = "Its a tie!";
    }
    else if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
        humanscoreHTML.textContent = `You: ${humanscore}`;
        computerscoreHTML.textContent = `AI: ${computerscore}`;
        result.textContent = "Invalid Text";
    }
    else {
        humanscoreHTML.textContent = `You: ${humanscore}`;
        computerscoreHTML.textContent = `AI: ${++computerscore}`;
        result.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}, Computer wins!`;
    }
}