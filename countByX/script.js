// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
function countByX(numbr, counter){
  let countArray = [];
  let total = 0;
  for(let i = 0; i < counter; i++){
 countArray.push(total += numbr);
  }
  return countArray;
}

countByX(1, 10);