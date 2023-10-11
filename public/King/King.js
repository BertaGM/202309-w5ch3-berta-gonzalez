import Character from "../Character/Character.js";

class King extends Character {
  yearsOfReign;

  constructor(name, family, age, yearsOfReign) {
    super(name, family, age);
    this.yearsOfReign = yearsOfReign;
  }

  saySomething() {
    return `${super.saySomething()}. You all are going to die!!`;
  }
}

export default King;
