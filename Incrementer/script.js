let theNumbers = [4,6,9,1,3];

function incrementer(nums) { 
    let newArray = []
  for(let i = 0; nums.length > i; i++){
    let actualNum = (nums[i] + i+1);
    if(actualNum > 10){
      newArray.push(actualNum % 10);
    }else{
    newArray.push(actualNum);
    }
  }
  return newArray;
}

incrementer(theNumbers);