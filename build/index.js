"use strict";
// tipos primitivos
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let nome = "Vitor";
let isHomem = true;
let idade = 30;
let altura = 1.82;
let altura1 = -1.82;
// objeto sem previsibilidade
let produto = {
    name: "Vitor",
    cidade: "Recife",
    idade: 30,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5
};
// Array
let dados = ["felipe", "anna", "vitor"];
let dados2 = ["felipe", "anna", "vitor"];
// Array de multi types
let infos = ["vitor", 19, "vitor", "adriano", true];
// Tupla
let boleto = ["agua conta", 192.90, 1378311];
// Datas
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
// Funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
let soma = addNumber(4, 8);
console.log(addToHello("Vitor"));
// funções multi tipos
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone("81997819213"));
// funções async
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Vitor";
    });
}
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
