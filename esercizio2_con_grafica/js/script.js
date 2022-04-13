//elementi del DOM
const playerResultDisplay = document.getElementById('player-result');
const computerResultDisplay = document.getElementById('computer-result');
const rollBtn = document.getElementById('roll');

const playerDiceDisplay = document.querySelector('.player > .dice-display');
const computerDiceDisplay = document.querySelector('.computer > .dice-display');
const playerScoreDisplay = document.querySelector('.player > .score-display');
const computerScoreDisplay = document.querySelector('.computer > .score-display');

//punti
let playerScore = 0;
let computerScore = 0;
playerScoreDisplay.innerHTML = playerScore;
computerScoreDisplay.innerHTML = computerScore;

rollBtn.addEventListener('click', function(){
  //generare due numeri casuali per computer e player da 1 a 6

  const playerNumber = Math.floor(Math.random() * 6 + 1);
  const computerNumber = Math.floor(Math.random() * 6 + 1);
  console.log(playerNumber, computerNumber);

  //inserire le facce del dado
  playerDiceDisplay.innerHTML = diceFaces[playerNumber - 1];
  computerDiceDisplay.innerHTML = diceFaces[computerNumber - 1];

  let playerResult;
  let computerResult;

  if(playerNumber === computerNumber){
    //impostare il risultato
    playerResult = 'Pareggio';
    computerResult = 'Pareggio';
  }else if(playerNumber < computerNumber){
    //impostare il risultato
    playerResult = 'Hai Perso!';
    computerResult = 'Hai Vinto!';
    //modificare il punteggio
    computerScore++;
    computerScoreDisplay.innerHTML = computerScore;
  }else if(playerNumber > computerNumber){
    //impostare il risultato
    playerResult = 'Hai Vinto!';
    computerResult = 'Hai Perso!';
    //modificare il punteggio
    playerScore++;
    playerScoreDisplay.innerHTML = playerScore;
  }

  playerResultDisplay.innerHTML = playerResult;
  computerResultDisplay.innerHTML = computerResult;
});