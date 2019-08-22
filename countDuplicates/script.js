function duplicateCount(text){
let counter = 0;
 let arrayText = text.toLowerCase().split("").sort()
 for(let i = 0; i < arrayText.length; i++){
   let j = i+1;
   if(arrayText[i] === arrayText[i+1]){
counter++;
while(arrayText[i] === arrayText[j]){
  arrayText.splice(j, 1)
}
}
 }
 return counter;
}