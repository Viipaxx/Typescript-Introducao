
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
