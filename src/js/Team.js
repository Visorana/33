export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(char) {
    this.characters.push(char);
  }

  * [Symbol.iterator]() {
    for (const character of this.characters) {
      yield character;
    }
  }
}
