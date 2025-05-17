 /*
Distribuidor de petiscos

Você tem uma lista de cães: Pantera, Luna e Thor
Crie um script que "entregue" 1 petisco para cada cão da lista
Exiba uma mensagem como: "Entregando petiscos para Pantera"

Mantenha os dados e a função em arquivos separados, use modularização
para organizar.
*/

const entregarPeticos = (listaAnimais) => {
    listaAnimais.forEach(animal =>{
        console.log(`Entregando petiscos para ${animal}`)
    })
}

export{
    entregarPeticos
}


