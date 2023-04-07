"use strict";
// tipos primitivos
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
