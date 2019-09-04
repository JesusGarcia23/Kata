function positiveSum(arr){
    let theSum = arr.filter(eachValue =>{
        return eachValue > 0;
      }).reduce((counter, actualValue) =>{
      return counter += actualValue
      }, 0)
      return theSum;
}
