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

#### Declaração de Dates (
    let aniversario: Date = new Date("2022-12-01 05:00")
)

<hr>

## Funções

#### Criando funções (

    as funções podem ter o seu tipo já declarado

    function addNumber(x: number, y: number): number {
        return x + y
    }

    ou podem ter o seu tipo implicito, onde o próprio código vai saber o tipo

    function addToHello(name: string){
        return `Hello ${name}`
    }

    let soma: number = addNumber(4, 8)
    console.log(addToHello("Vitor"))
)

## Funções multi tipos

#### Criando funções multi tipos (

    Nas funções multi tipos você pode receber o retorno tanto de um tipo como de outro

    function callToPhone(phone: number | string): number | string {
    return phone;
}
)

## Funções Async

#### Criando funções async (
 
    async function getDatabase(id: number): Promise<string> {
    return "Vitor"

    todas as funções async tem que ter a promise do tipo que você quer que retorne
}
)

<hr>

## Interfaces (contrato)

### interfaces -> tem uma estrutura de propriedades, e funciona do mesmo modo do type
### types é usado mais para o fato de você tipar algo, interface é mais usado para usar em classe

#### Criando uma interface (
    type robot = {
        readonly id: number | string;
        name: string;
    }

    interface robot2 {
        readonly id: number | string;
        name: string;
    }

    const bot: robot2 = {
        id: 1,
        name: "Vitor"
    } 

    const bot2: robot = {
        id: 1,
        name: "Vitor"
    } 

    readonly propriedade usada para que o usuário não possa modificar
)

##### Quando usar? use o type quando você for definir a forma como uma variavel ou uma const tem que receber seus valores; use o interface quando você for usar em classes para implementar algo (um contrato)

<hr>

## Classes

#### Uma classe nada mais é do que uma forma 

#### Criando uma classe e instanciando-a (
    class Character {
        name?: string; (a ? é para dizer que o parâmetro não é obrigatório)
        stregth: number;
        skill: number;

        constructor (streght: number, skill: number) {
            // this.name = name
            this.stregth = streght
            this.skill = skill
        }

        attack(): void{
            console.log(`Attack with ${this.stregth} points`)
        }
    }

    const p1 = new Character(10, 98)
    console.log(p1.attack())
        [Attack with 10 points]
)

## Modificadores de Acesso -> data modifies

#### Quem pode acessar um determinado dado da classe
#### Existem três tipos: public, private e protected

- private: o dado só pode ser acessado dentro da classe
- public: o dado pode ser acessado de qualquer lugar
- protected: o dado só pode ser acessado dentro da classe e de subclasses que herdem essa classe

#### Criando classe com modificador de acesso (
    
class Character {
    private name?: string; (só pode ser acessado dentro da classe)
    public stregth: number; (pode ser acessado de qualquer lugar)
    protected skill: number; (só pode ser acessado dentro da classe ou de subclasses que herdem essa classe)

        constructor (name: string, streght: number, skill: number) {
            this.name = name
            this.stregth = streght
            this.skill = skill
        }

        attack(): void{
            console.log(`Attack with ${this.stregth} points`)
        }
    }

    const p1 = new Character("Gusman", 10, 98)

    console.log(p1.attack()) 
)

os data modifiers também podem ser implementados nos métodos dentro da classe

## Subclass

#### uma classe que herda de outras classe

#### Criando uma subclass (
    class Character {
        private name?: string;
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
)

<hr>

## Generics

#### serve para deixar em aberto o tipo que você vai passar como parâmetro

#### Criando função generic (
    function concatArray<T>(...itens: T[]): T[] {
        return new Array().concat(...itens)
    }
        
    const numArray = concatArray<number[]>([1, 5], [3], [4, 5])
    const stgArray = concatArray<string[]>(["Vitor", "Naruto"], ["Luffy"])

    numArray.push("saitama") // Erro

    console.log(numArray)
    console.log(stgArray)
)