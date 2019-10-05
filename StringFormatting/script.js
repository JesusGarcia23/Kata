function stringTransformer(str) {
    let theString = str.split(' ').reverse();
    let newArray = [] 
    
    let newStr = theString.map(eachWord => {
    let eachLetter = eachWord.split('');
    let theMap = eachLetter.map(theLetter =>{
      if(theLetter === theLetter.toUpperCase()){
        return theLetter.toLowerCase();
        // return theLetter.toLowerCase();
      }else{
        return theLetter.toUpperCase();
        // return theLetter.toUpperCase();
      }
    })
    newArray.push(theMap.join(""))
    })
    // console.log(newStr);
    return newArray.join(' ');
    
    }
    stringTransformer('Example string');