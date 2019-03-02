const game = new Game();
const begin = document.querySelector("#begin-game");

begin.addEventListener("click", function() {
  game.startGame();

  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});

game.addEventListener("keydown", function(e) {
  game.handleKeydown(e);
});
