import Character from "./Character/Character.js";
import King from "./King/King.js";

const Bronn = new Character("Bronn", "Stark", 15);
const JoffreyBaratheon = new King("Joffrey Baratheon", "Lanister", 34, 15);

console.log(Bronn);
console.log(Bronn.saySomething());
console.log(JoffreyBaratheon);
console.log(JoffreyBaratheon.saySomething());
