function solucao(letra, palavras) {
    let a = 0
      for (let item of palavras){
      if (item[0] != letra){
        a++
      }
    }console.log(a)
  }