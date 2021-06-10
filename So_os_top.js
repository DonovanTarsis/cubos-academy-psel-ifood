function solucao(produtos) {
    let resposta = {
    totalTop:0,
    percentual:0
  }
  let tot = 0
  for (let item of produtos){
    if (item.preco > 10000){
      resposta.totalTop += item.preco
    }tot += item.preco
  }resposta.percentual = resposta.totalTop / tot
  console.log(resposta)
}