"use strict";
// interface
const bot = {
    id: 1,
    name: "Vitor",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
const bot2 = {
    id: 1,
    name: "Vitor"
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
// readonly propriedade usada para que o usuário não possa modificar
