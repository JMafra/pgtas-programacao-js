/*
 Hands-on: Seu Programa sobre função
Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.  
O campo abaixo é um campo de texto, logo, copie o código javascript e cole abaixo
*/

const entrada = [1, 'a', 3, NaN, 'b', 5, 2.5];
const resultado = filtrarInteiros(entrada);
console.log(resultado); // Saída: [1, 3, 5]

function filtrarInteiros(lista) {
    return lista.filter(item => Number.isInteger(item));
  }
