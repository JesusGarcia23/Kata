function firstNonRepeated(s) {
    let strArr = s.split('');
    let theOne = ''
    for(let i = 0; i < strArr.length; i++){
      if((strArr.indexOf(strArr[i])) === (strArr.lastIndexOf(strArr[i]))){
        return strArr[i]
        break;
      }
    }
    return null;
   }