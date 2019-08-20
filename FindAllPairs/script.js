function duplicates(array){
    let counter = 0;
  for(let i = 0; i < array.length; i++){
    for(j = i+1; j < array.length; j++){
  if(array[i] === array[j]){
    counter++;
      array.splice(j, 1);
      break;
  }
  
    }
  }
  return counter;
  }