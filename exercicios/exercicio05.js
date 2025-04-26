 const nome = "Ana"
 const peso = 11

 const porte = peso <= 10 ? 'pequeno' : 'médio'

 console.log('--------')
 console.log(`Nome: ${nome}`)
 console.log(`Peso: ${peso}`)
 console.log(`Porte: ${porte}`)

 function classificarPortePorPeso(nome, peso){
    const porte = peso <= 10 ? 'pequeno' : 'médio'

    console.log('--------')
    console.log(`Nome: ${nome}`)
    console.log(`Peso: ${peso}`)
    console.log(`Porte: ${porte}`)
 }

 classificarPortePorPeso('Gigi', 14.5)
 classificarPortePorPeso('Gigi', 15.4)