/*
Hands-on: Seu Programa Retornando Número de Vogais

Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata .
 O texto de entrada conterá apenas letras minúsculas e/ou espaços. 
Letras acentuadas não fazem parte desse desafio.  
*/

const texto = "este é um exemplo de texto simples";
const totalVogais = contarVogais(texto);
console.log(totalVogais); // Saída: 11

function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
  
    for (let letra of texto) {
      if (vogais.includes(letra)) {
        contador++;
      }
    }
  
    return contador;
  }

 