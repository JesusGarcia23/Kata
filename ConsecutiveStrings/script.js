function longestConsec(strarr, k) {
    let lastArr = ''
    let combination = ""
    if(k > strarr.length || k <= 0){
      return ""
    }else{
      
  for(let i = 0; i < strarr.length - (k - 1); i++){
    combination = strarr.slice(i, i+k).join('')
    if(combination.length > lastArr.length){
      lastArr = combination
    }
  }
  
    }
    return lastArr
  }