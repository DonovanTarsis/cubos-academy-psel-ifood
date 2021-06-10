function solucao(precos) {
    let a = 0
    let c = 0
    let tot = 0
    if (precos.length >= 5){
      for (let item of precos){
        if (c == 0){
          a = item
        }else if (item < a){
          a = item
        }tot += item
        c++
      }tot -= a
    }else{
      for (let item of precos){
        tot += item
      }
    }console.log(tot)
  }  