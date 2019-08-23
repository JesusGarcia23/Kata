function nextHappyYear(year){
    let flag = false;
    let duplicateNumbers = [];
  
  while(flag === false){
    year++;
    if(checkYear(year) === true){
     flag = true;
    }
  }
  
  return year;
  }
  
  function checkYear(yearToCheck){
  let counter = 0;
  let newYear = yearToCheck.toString().split("");
    for(let i = 0; i < newYear.length; i++){
      for(let j = i+1; j < newYear.length; j++){
        if(newYear[i] === newYear[j]){
          counter++;
          break;
        }
      }
    }
    if(counter === 0){
      return true;
    }else{
    return false;
    }
  }