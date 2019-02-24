class Player {
  constructor(id, name, color, active = false) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.active = active;
    this.tokens = [];
  }
}
