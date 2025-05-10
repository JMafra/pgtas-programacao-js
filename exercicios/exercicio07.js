/**

  Contador de satisfação de passeio

  Crie um script que avise quando o Dog já passeou o suficiente. 
  Para saber, vamos considerar que ele se sentirá satisfeito somente a partir de 5 voltas na quadra.

  Use a estrutura de repetição while.

  Exiba: 
  Qual o número da volta atual
  Quando o dog estiver satisfeito

  Extra: transforme a lógica em uma função (da forma que conseguir)

 */
const passearComDog = () => {

    let qtdeVoltas = 1;

    while (qtdeVoltas <5) {
        console.log(`N. Volta: ${qtdeVoltas}`);
        console.log(`Dog ai nda precisa passear.`);
        qtdeVoltas++;
    }

    console.log(`N. Volta: ${qtdeVoltas}`);
    console.log(`Dog já passeou o suficiente.`);
}

passearComDog()