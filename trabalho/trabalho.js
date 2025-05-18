const geradorDeTagsDeIdentificacao=(nome)=>{
  return nome.toUpperCase()
}

const verificarSePodeSerAdotado= (idade, porte)=>{
  const idadeMinima = 1
   const adocao = idade == idadeMinima ||  porte === 'P' 
                ? true               
                : false
   return adocao
}

const calcularConsumoDeRacao= (nome,idade, peso) => {
  const gramasPorDia = peso * 300

  return gramasPorDia
}

const decidirTipoDeAtividadePorPorte = (porte) => {
        let atividade
        switch (porte){
            case 'pequeno': atividade = "brincar dentro de casa"
                      break
            case 'medio': atividade = "caminhada no quarteirão"
                      break
            case 'grande': atividade = "correr no parque"
                      break
        }
        return atividade                    
  }

const buscarDadoAsync = async () => {
  return 'Pipoca';
};


export{
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync

}
