function stockList(listOfArt, listOfCat){
    let result = {}
    let finalStr = ""
    
     if(!listOfArt.length|| !listOfCat.length){
      return ""
    }
   
    for(let i = 0; i < listOfCat.length; i++){
      result[listOfCat[i]] = 0
    }
   
     for(let i = 0; i < listOfArt.length; i++){
       let theInitial = listOfArt[i].charAt(0)
       let theValue = Number(listOfArt[i].match(/[1-9][0-9]*/)[0])
   
     if(listOfCat.indexOf(theInitial) >= 0){
         result[theInitial] += theValue
     }
   }
   
   for(x in result){
     console.log("key is " + x + " value is" + result[x])
     finalStr += `(${x} : ${result[x]})`
   }
   
   return finalStr.split(')(').join(") - (")
   
   }