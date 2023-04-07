
// interface

type robot = {
    readonly id: number | string;
    name: string;
}

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot: robot2 = {
    id: 1,
    name: "Vitor",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
} 

const bot2: robot = {
    id: 1,
    name: "Vitor"
} 

class Pessoa implements robot2{
    id: string | number;
    name: string;

    constructor(id: string | number , name: string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, "gutsman");
console.log(p.sayHello())
// readonly propriedade usada para que o usuário não possa modificar
