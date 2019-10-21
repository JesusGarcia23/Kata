function highAndLow(numbers){
    let theArray = numbers.split(" ");
    let low = Number(theArray[0]);
    let high = Number(theArray[0]);
    for(let i = 0; i < theArray.length; i++){
    if(Number(theArray[i]) > high){
      high = theArray[i];
    }if(Number(theArray[i]) < low){
      low = theArray[i];
    }
    }
    return `${high} ${low}`
    }