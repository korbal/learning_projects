class Player {
  constructor(id, name, color, active = false) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }
  get unusedTokens() {
    return this.tokens.filter(token => !token.dropped);
  }

  get activeToken() {
    return this.unusedTokens[0];
  }
  createTokens(num) {
    const tokens = [];
    for (let i = 1; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }
    return tokens;
  }
}
