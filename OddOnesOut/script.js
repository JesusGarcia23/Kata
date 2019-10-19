function oddOnesOut(nums) {
  return  nums.filter(num => {
    return nums.filter( theNum => {return theNum === num }).length % 2 === 0;
   })
}







//CLASSIC VERSION

// function oddOnesOut(nums) {
//     let indexArray = [];
//     let indexCancelled = [];
//  for(let i = 0; i < nums.length; i++){
//    let j = i+1;
//    let counter = 1;

//    while(j < nums.length){
//      if(nums[i] === nums[j]){
//        counter++
//      }
//      j++;
//    }
//    if(indexCancelled.indexOf(nums[i]) >= 0){
//      continue;
//    }else if(indexArray.indexOf(nums[i]) >= 0){
//      continue;
//    }else{
//    if(counter % 2 !== 0){

//       indexArray.push(nums[i])
  
//    }else{
//      indexCancelled.push(nums[i])

//    }
//      }
//       }
//  return nums.filter(eachItem => {
//    return indexArray.indexOf(eachItem) < 0;
//  });
// }