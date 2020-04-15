// Task
// You are given a function that should insert an asterisk (*) between every pair of even digits in the given input, and return it as a string. If the input is a sequence, concat the elements first as a string.

// Input
// The input can be an integer, a string of digits or a sequence containing integers only.

// Output
// Return a string.

// Examples
// 5312708     -->  "531270*8"
// "0000"      -->  "0*0*0*0"
// [1, 4, 64]  -->  "14*6*4"


function asteriscIt(n) { 
  if(typeof n !== 'object'){
    let arr = n.toString().split("");
   return arr.map((value, index) => {
     return (value % 2 == 0 && arr[index + 1] % 2 == 0) ? value+"*" : value;
   }).join('');
   
  }else{
    let arr = n.join("").split("");
   return arr.map((value, index) => {
     return (value % 2 === 0 && arr[index + 1] % 2 === 0) ? value+"*" : value;
   }).join('')
  }
};