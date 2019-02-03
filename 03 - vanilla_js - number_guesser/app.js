let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
//message field under input field
const message = document.querySelector('.message');

//assign ui min and max. min-num and max-num are html spans. textContent swaps the values


minNum.textContent = min;
maxNum.textContent = max;

//event listener for play-again. this is with event delegatin, need to use the parent of the submit button which is #game and then within that find the play-again class
//if we used click event, it would reload ALWAYS.
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again')
  window.location.reload();
})

//add event listener for submit guess
guessBtn.addEventListener('click', function(){
  
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess > max || guess < min) {
    setMessage(`Choose a number between ${min} and ${max}!`, 'red');
  } 
  //check if won
  if (guess === winningNum) {
    guessInput.disabled = true;
    gameOver(true, `The number was ${guess}, so you got it. You win!`);

  } else {
  //guessed wrong number
    guessesLeft -= 1;
    // game over - lost
    if (guessesLeft === 0) {
      gameOver(false, `You couldn't guess the number. It was ${winningNum}.`)

    } else {
    guessInput.textContent ='';
    guessInput.focus();
    //wrong answer but game continues
    setMessage(`Not the correct number. You have ${guessesLeft} guess(es).`,'red');
      
    }

  }

})

function setMessage(msg, color){
  //message = passed in message, color = textcolor. red = danger, green = cool
  message.textContent = msg;
  message.style.borderColor = color;
  message.style.color = color;
  guessInput.style.borderColor = color;
}

function gameOver(won, msg){
  //won is bool, msg is message displayed
  let color;
  won === true ? color = 'green' : color = 'red';
  message.disabled = true;
  setMessage(msg, color);

  //play again? change button text
  guessBtn.value = 'Play Again'

  //add class name, so the even listener will listen for this. because this class was added after the DOM load, we need event delegation to find the class. see event listener
  guessBtn.className += 'play-again';

}

function getRandomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1)+1);
}