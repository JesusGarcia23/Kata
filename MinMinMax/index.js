function minMinMax(array) {
    array.sort((a, b) => a-b)
    let highest = array[array.length - 1]
    let smallest = array[0]
    let absentSmallest = smallest
   
    while(array.indexOf(absentSmallest) >= 0){
      absentSmallest++
    }
   
    return [smallest,absentSmallest, highest]
   }