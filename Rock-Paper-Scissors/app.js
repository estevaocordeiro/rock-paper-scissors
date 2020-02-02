const game = () => {
    let pScore = 0;
    let cScore = 0;
    

//Play Match
const playMatch = () =>{
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    
    hands.forEach(hand =>{
        hand.addEventListener("animationend", function(){
             this.style.animation = "";                 
        });
    });
    
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];
    
    // para cada click em qualquer botao, vai executar a funcao abaixo
    options.forEach(option => {
        option.addEventListener("click",function(){
            
    // variavel que pega um numero random 0 1 2 e mostra o que tem no array - rock paper scissors        
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        
        setTimeout(() => {    
        //Here is where we call compareHands
        compareHands(this.textContent, computerChoice);
            
        //Update Images
        playerHand.src = `./Images/${this.textContent}.png`;
        computerHand.src = `./Images/${computerChoice}.png`;
        }, 2000);
        
        //Animacao
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
            
        });
    });       
};

const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    
const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector('.winner');
    
    if (playerChoice === computerChoice){
        winner.textContent = 'It`s a tie';
        return;
    }
    
    if (playerChoice === 'rock'){
        if (computerChoice === 'scissors'){
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        } else {
            winner.textContent = 'Computer Wins'; 
            cScore++;
            updateScore();
            return;
        }
    }
    
    if (playerChoice === 'paper'){
        if(computerChoice === 'rock'){
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        } else {
            winner.textContent = 'Computer Wins';  
            cScore++;
            updateScore();
            return;
        }
    }
    
    if (playerChoice === 'scissors'){
        if(computerChoice === 'paper'){
            winner.textContent = 'Player Wins';
            pScore++;
            updateScore();
            return;
        } else {
            winner.textContent = 'Computer Wins';  
            cScore++;
            updateScore();
            return;
        }
    }
}




playMatch();
};

game();
