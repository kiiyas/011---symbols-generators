export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('The character has been added!');
    }
    this.members.add(character);
  }

  addAll(characters) {
    this.members = new Set([...this.members, ...characters]);
  }

  toArray() {
    return [...this.members];
  }

  * [Symbol.iterator]() {
    for (const person of this.members) {
      yield person;
    }
  }
}
