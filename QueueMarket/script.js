function queueTime(customers, n) {
    let till = []
  
    if(!customers.length) return 0;
    
    else if(n > customers.length){
      customers.sort((a,b) => {
      return b - a
    })
  
   return customers[0];
  
    }else if(n === 1){
    return total = customers.reduce((counter, eachItem) => {
      return counter += eachItem;
    })
  }else{
  
  for(let i = 0; i < n; i++){
   till[i] = 0;
  }
  
  for(let i = 0; i < customers.length; i++){
  
    till.sort((a, b) => {
       return a - b
    })
  
     till[0] += customers[i];
  }
  
  till.sort((a, b) => {
       return b - a
    })
  
  return till[0];
  }
  }