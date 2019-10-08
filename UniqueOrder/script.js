var uniqueInOrder=function(iterable){
    let theArray = [];
    if(typeof iterable === 'string'){
    theArray = iterable.split('');
    }else{
   theArray = iterable;
    }
  
  for(let i = 0; i < theArray.length; i++){
    let j = i;
  
    while(theArray[i] === theArray[j+1]){
      theArray.splice(j, 1);
       j = j;
    }
  }
  return theArray;
  }