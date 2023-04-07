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

