"use strict";
// Classes
class Character {
    constructor(name, streght, skill) {
        this.name = name;
        this.stregth = streght;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
// Character: superclass
// Magician: subclass
class Magician extends Character {
    constructor(name, streght, skill, magicPoints) {
        super(name, streght, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Gusman", 10, 98);
console.log(p1.attack());
const p2 = new Magician("Mago", 9, 30, 100);
console.log(p2.attack());
