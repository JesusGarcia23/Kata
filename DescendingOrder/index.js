function descendingOrder(n){
    let theArray = n.toString().split('').map(Number)
    for(let i = 0; i < theArray.length; i++){
   
      for(let j = 0; j < theArray.length; j++){
        if(theArray[i] > theArray[j]){
          temp = theArray[i]
          theArray[i] = theArray[j]
          theArray[j] = temp
        }
      }
   
    }
    return theArray.join('')
   }
   
   descendingOrder(25674)