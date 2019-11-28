function generateRange(min, max, step){
    let theArray = []
  for(let i = min; i <= max; i += step){
       theArray.push(i);
  }
  return theArray
  
  }