// tipos primitivos

let nome: string = "Vitor";
let isHomem: boolean = true;
let idade: number = 30;
let altura: number = 1.82;
let altura1: number = -1.82;

// objeto sem previsibilidade
let produto: object = {
    name: "Vitor",
    cidade: "Recife",
    idade: 30,
}

// objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5
}


// Array

let dados: string[] = ["felipe", "anna", "vitor"];

let dados2: Array<string> = ["felipe", "anna", "vitor"];


// Array de multi types

let infos: (string | number | boolean)[] = ["vitor", 19, "vitor", "adriano", true]

// Tupla

let boleto: [string, number, number] = ["agua conta", 192.90, 1378311]

// Datas

let aniversario: Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString())

// Funções

function addNumber(x: number, y: number): number {
    return x + y
}

function addToHello(name: string): string{
    return `Hello ${name}`
}

let soma: number = addNumber(4, 8)
console.log(addToHello("Vitor"))

// funções multi tipos

function callToPhone(phone: number | string): number | string {
    return phone;
}

console.log(callToPhone("81997819213"))

// funções async

async function getDatabase(id: number): Promise<string> {
    return "Vitor"
}