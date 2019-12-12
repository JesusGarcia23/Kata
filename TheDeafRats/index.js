var countDeafRats = function(town) {
    let theTown = town.split('')
    let pipePosition = 0;
    let ratsToTheRight = []
    let ratsToTheLeft = []
    let deafRats = 0
  
    for(let i = 0; i < theTown.length; i++){
      if(theTown[i] === '~' && theTown[i+1] === 'O'){
       ratsToTheRight.push(i)
        i++
      }else if(theTown[i] === 'O' && theTown[i+1] === '~'){
        ratsToTheLeft.push(i)
        i++
      }else if(theTown[i] === 'P'){
        pipePosition = i
      }
    }
  
    for(let i = 0; i < ratsToTheRight.length; i++){
      if(ratsToTheRight[i] > pipePosition){
        deafRats++
      }
    }
  
     for(let i = 0; i < ratsToTheLeft.length; i++){
      if(ratsToTheLeft[i] < pipePosition){
        deafRats++
      }
    }
  
    return deafRats++;
  }
  
  countDeafRats("~O~O~O~OP~O~OO~")