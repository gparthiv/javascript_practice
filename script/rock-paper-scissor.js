

let score = JSON.parse(localStorage.getItem('score'))
  //convert JSON string back to Object
  || { wins: 0, loses: 0, ties: 0 };
//if removed from local storage, it will assign instead of null value on xyz++;

updateScore();

//first score gets updated by wins, loses and ties according to playGame() score.xyz++;
//then gets stored in local storage as string
//on refreshing site, it gets stored as object 

function playGame(pMove) {
  const cpuMove = pickCPUmove();
  let result = '';
  if (pMove === 'rock') {
    if (cpuMove == 'scissor') {
      result = 'Won';
    } else if (cpuMove == 'paper') {
      result = 'Lose';
    } else {
      result = 'Tie';
    }

  } else if (pMove === 'paper') {
    if (cpuMove == 'rock') {
      result = 'Win';
    } else if (cpuMove == 'paper') {
      result = 'Tie';
    } else {
      result = 'Lose';
    }

  } else if (pMove === 'scissor') {
    if (cpuMove == 'rock') {
      result = 'Lose';
    } else if (cpuMove == 'paper') {
      result = 'Won';
    } else {
      result = 'Tie';
    }
  }

  if (result === 'Won') {
    score.wins++;
  } else if (result === 'Lose') {
    score.loses++;
  } else {
    score.ties++;
  }

  // Store in local storage to avoid erase on refresh
  // local storage only suports strings, hence JSON stringify
  localStorage.setItem('score', JSON.stringify(score));

  updateScore();

  document.querySelector('.js-result').
    innerHTML = `You ${result}.`
  document.querySelector('.js-move').
    innerHTML = `You <img src="assets/${pMove}-emoji.png" class="icon"><img src="assets/${cpuMove}-emoji.png" class="icon"> Computer.`;
  // alert(`You chose ${pMove}.\nCPU chose ${cpuMove}.\n${result}
  // Wins: ${score.wins}  Loses: ${score.loses}  Ties: ${score.ties}`);
}

function updateScore() {
  document.querySelector('.js-score').
    innerHTML = `Wins: ${score.wins}  Loses: ${score.loses}  Ties: ${score.ties}`
}

// let cpuMove = ''; 
// global variable (best alternate: return)
function pickCPUmove() {
  const randNo = Math.random();
  if (randNo >= 0 && randNo < 1 / 3) {
    cpuMove = 'rock';
  } else if (randNo >= 1 / 3 && randNo < 2 / 3) {
    cpuMove = 'paper';
  } else {
    cpuMove = 'scissor';
  }
  return cpuMove;
}