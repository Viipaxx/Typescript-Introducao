// generics

function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1, 5], [3], [4, 5])
const stgArray = concatArray<string[]>(["Vitor", "Naruto"], ["Luffy"])

console.log(numArray)
console.log(stgArray)