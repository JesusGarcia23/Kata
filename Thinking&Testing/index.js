function testit(n){
    a = n.toString(2)
    contador = 0
    console.log(a)
    for(var i = 0; i < a.length; i++){
      if(a[i] == 1){
        console.log(contador)
        contador++
      }
    }
      return contador
    }