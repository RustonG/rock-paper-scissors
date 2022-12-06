// Array to roll computer choice from
const choices = ['rock', 'paper', 'scissors'];

// Getting a random result from 'choices'
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

/* Function that plays out a single round of rock-paper-scissors and returns
   a message according to the result. Default computerChoice set to a
   getComputerChoice call. Convert playerChoice to a lowercase string for
   ease of comparison. */
function playRound(playerChoice, computerChoice = getComputerChoice()) {
  let pChoiceLowerCase = playerChoice.toLowerCase();

  if (pChoiceLowerCase === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You Win! Rock beats Scissors.'
    } else if (computerChoice === 'paper') {
      return 'You Lose! Paper beats Rock.'
    } else {
      return 'Draw. Try again.'
    }
  }

  if (pChoiceLowerCase === 'paper') {
    if (computerChoice === 'rock') {
      return 'You Win! Paper beats Rock.'
    } else if (computerChoice === 'scissors') {
      return 'You Lose! Scissors beat Paper.'
    } else {
      return 'Draw. Try again.'
    }
  }

  if (pChoiceLowerCase === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You Win! Scissors beat Paper.'
    } else if (computerChoice === 'rock') {
      return 'You Lose! Rock beats Scissors.'
    } else {
      return 'Draw. Try again.'
    }
  }
}

/* This function plays out the rock-paper-scissors 5 times, keeps track of the results
   and constructs a return message according to the them. */
function game() {
  let score = {
    win: 0,
    loss: 0,
    draw: 0
  }

  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt('What\'s your play?');
    let roundResult = playRound(playerChoice);
    if (roundResult.includes('Win')) {
      score.win += 1;
    } else if (roundResult.includes('Lose')) {
      score.loss += 1;
    } else {
      score.draw += 1;
    }
  }

  let gameResult = '';
  let endgameMessage = '';

  // Determine game result according to score to construct endgame message
  score.win > score.loss ? gameResult = 'Winner' : score.win < score.loss ? gameResult = 'Loser' : gameResult = 'Draw';

  if (gameResult !== 'Draw') {
    endgameMessage = `You are a ${gameResult} of this game.`
  } else {
    endgameMessage = `This game was a ${gameResult}`;
  }

  return `You won ${score.win} rounds. You lost ${score.loss} rounds. ${score.draw} round(s) resulted in a draw. ${endgameMessage}`;
}