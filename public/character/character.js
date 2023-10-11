class Character {
  name;
  family;
  age;
  liveOrDeath = "alive";
  serie = "Game of Thrones";

  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
  }

  die() {
    return (this.liveOrDeath = "death");
  }

  saySomething() {
    return `My name is ${this.name}, my family is ${this.family}.`;
  }
}

export default Character;
