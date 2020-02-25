function minValue(values){
    let theStr = ""
    values.sort((a, b) => {return a - b})
    
    for(let i = 0; i < values.length; i++) {
   theStr.indexOf(values[i]) < 0 ? theStr += `${values[i]}` : null
    }
  
    return Number(theStr)
  }