class Board {
  constructor({ rows = 6, columns = 7 } = {}) {
    this.rows = rows;
    this.columns = columns;
    this.spaces = this.createSpaces();
  }

  createSpaces() {
    const spaces = [];

    for (let x = 0; x < this.columns; x++) {
      const column = [];

      for (let y = 0; y < this.rows; y++) {
        const space = new Space(x, y);
        column.push(space);
      }
      spaces.push(column);
    }
    return spaces;
  }
}
