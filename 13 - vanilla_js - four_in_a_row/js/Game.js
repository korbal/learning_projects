class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  createPlayers() {
    const players = [
      new Player(1, "Bálint", "#e15258", true),
      new Player(2, "Judit", "#e59a13")
    ];
  }
}
