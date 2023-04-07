// Classes

class Character {
    name?: string;
    stregth: number;
    skill: number;

    constructor(name: string, streght: number, skill: number) {
        this.name = name
        this.stregth = streght
        this.skill = skill
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`)
    }
}

// Character: superclass
// Magician: subclass
class Magician extends Character {

    magicPoints: number;

    constructor(name: string, streght: number, skill: number, magicPoints: number) {
        super(name, streght, skill);
        this.magicPoints = magicPoints
    }
}

const p1 = new Character("Gusman", 10, 98)
console.log(p1.attack())

const p2 = new Magician("Mago", 9, 30, 100)
console.log(p2.attack())