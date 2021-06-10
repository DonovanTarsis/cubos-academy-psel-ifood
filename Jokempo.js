function solucao(joao, andre) {
    if (joao === andre){
    console.log('EMPATE')
  } else if (joao === 'PEDRA' && andre === 'TESOURA' || joao === 'PAPEL' && andre === 'PEDRA' || joao === 'TESOURA' && andre === 'PAPEL'){
    console.log('JOAO')
  }else if(andre === 'PEDRA' && joao === 'TESOURA' || andre === 'PAPEL' && joao === 'PEDRA' || andre === 'TESOURA' && joao === 'PAPEL'){
    console.log('ANDRE')
  }
}