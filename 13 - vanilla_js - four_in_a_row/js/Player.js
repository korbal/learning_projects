class Player {
  constructor(id, name, color, active = false) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.active = active;
    this.tokens = createTokens(21);
  }
  createTokens(num) {
    const tokens = [];
    for (i = 1; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }
    return tokens;
  }
}
