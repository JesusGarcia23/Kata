const catchSignChange = arr => {
    counter = 0;
    if(arr.length){
    for(let i = 0; i < arr.length; i++){
      if((arr[i] < 0) && (arr[i+1] >= 0) || (arr[i] >= 0) && (arr[i+1] < 0)) counter++;
    }
    return counter
    }
    return 0;
  };