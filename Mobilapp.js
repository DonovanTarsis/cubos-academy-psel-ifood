function solucao(tempo, distancia) {
	let a = 0
  if (tempo < 5){
    a = 600
  }else if (tempo >= 5 && tempo <= 60){
    a = (tempo * 100) + (distancia * 50)
  }else if (tempo > 60){
    if (distancia < 100){
      a = distancia * 200
    }else if (distancia >= 100){
      a = distancia * 150
    }
  }console.log(a)
}