class Character {
  name;
  family;
  age;
  isAlive = true;
  serie = "Game of Thrones";

  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
  }

  die() {
    return (this.isAlive = false);
  }
}

export default Character;
