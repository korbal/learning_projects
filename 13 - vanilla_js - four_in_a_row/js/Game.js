class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }
  get activePlayer() {
    return this.players.find(player => player.active);
  }

  createPlayers() {
    const players = [
      new Player(1, "Bálint", "#e15258", true),
      new Player(2, "Judit", "#e59a13")
    ];
    return players;
  }
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }
}
