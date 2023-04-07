"use strict";
// generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3], [4, 5]);
const stgArray = concatArray(["Vitor", "Naruto"], ["Luffy"]);
console.log(numArray);
console.log(stgArray);
