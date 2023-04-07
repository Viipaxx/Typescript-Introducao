# TypeScript

#### typescript é um superset para javascript -> é tudo o que o javascript é com mais qualidades

### Vantagens
- Tipagem
- Erro em fase de desenvolvimento
<hr>

## Tipos de Variaveis

    tipos primitivos

        -boolean
        -number
        -string
    
        let isLigado: boolean = false
        let isLigado = false (Usando esse metódo a variavel ainda pode ser mutada)

        let nome: string = "Vitor";

        let idade: number = 19;
        let altura: number = 1.81; (o number pode ser tanto para inteiros como para quebrados)

    tipos especiais

        -null
        -undefined

        let nulo: null = null; (só pode receber o tipo nulo)
        let idenfinido: undefined = undefined (mesmo caso do null)

    tipos abrangentes

        -any
        -void

        let retorno: void = void (usado em funções para retornar o valor vazio)
        let retornoView: any = "" (aceita qualquer coisa)

    Objeto sem previsibilidade

        let produto: object = {
            name: "Vitor",
            cidade: "Recife",
            idade: 30,
        }

    Objeto tipado - com previsibilidade

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

<hr>

## Arrays

#### Declaração de Array simples (
    
    let dados: string[] = ["felipe", "anna", "vitor"];

    let dados2: Array<string> = ["felipe", "anna", "vitor"];
)

#### Declaração de Array de multi types (
    let infos: (string | number | boolean)[] = ["vitor", 19, "vitor", "adriano", true]
)

## Tuplas

#### Declaração de Tuplas (
    let boleto: [string, number, number] = ["agua conta", 192.90, 1378311] -> Tem que ser adicionado de acordo com a ordem da definição
)

## Array métodos 

#### Métodos iguais ao do JS (
    array.map()
    array.reduce()
    array.pop()
    array.push()
    array.filter()
    ...
)

## Dates

####