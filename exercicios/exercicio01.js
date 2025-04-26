
let animal = [{
    nome: "Maia",
    raca: "PASTOR",
    idade: 5,
    peso: 20.5,
    adotado: true
}]

animal[0].raca = animal[0].raca.charAt(0).toUpperCase() + animal[0].raca.slice(1).toLowerCase()
console.log("TAG DE IDENTIFICAÇÃO")
console.log("====================")
console.log(`Nome: ${animal[0].nome.toUpperCase()} \nRaça: ${animal[0].raca} \nPeso: ${animal[0].peso} Kg`)
console.log("====================")

console.table(animal)
