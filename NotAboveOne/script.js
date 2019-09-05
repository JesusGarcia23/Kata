function binaryCleaner(arr){
    let totalArray = [];
  let indexRemoved = [];
  let correctValue = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 1){
      indexRemoved.push(i);
    }else{
      correctValue.push(arr[i])
    }
  }
   totalArray.push(correctValue);
  totalArray.push(indexRemoved);
  return totalArray;
  }