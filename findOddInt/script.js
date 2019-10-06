function findOdd(A) {
    let newArray = []
    for(let i = 0; i < A.length; i++){
     let theNumber = newArray.map(eachN => { return eachN.number }).indexOf(A[i])
    
    if(theNumber < 0){
      newArray.push({number: A[i], count: 1})
    }else{
     newArray[theNumber].count += 1
    }
    }
    let oddArray = newArray.filter((eachItem) => {
      return eachItem.count % 2 !== 0
    })
    
    return oddArray[0].number;
  }