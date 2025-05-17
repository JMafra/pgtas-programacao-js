try {
    console.log(`Tentando alimentar o pet...`)
    throw new Error(`pet não quis comer`)
} catch (excecao) {
     console.log(excecao)
     console.log(excecao.name)
     console.log(excecao.message)
}finally{
    console.log(`Sempre é executado`)
}