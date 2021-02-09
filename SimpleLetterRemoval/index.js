// In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

// - first remove all letter 'a', followed by letter 'b', then 'c', etc...
// - remove the leftmost character first.


//second version

function solve(s, k){
  const abc = "abcdefghijklmnopqrstuvwxyz"
  
  for (let i=0; i<abc.length; i+=1) {
    while(s.includes(abc[i]) && k > 0) {
      s = s.replace(abc[i], "")
      k -= 1
    }
  }
  
  return s
}

//  first version

function solve(s, k){

    let actualLetter = 97
    let textToSplit = s.split("");
    let amountAvailable = k;
    let updatedtext = textToSplit;
  
    if (s.length <= k) {
      return '';
    }
  
    for (let i = 0; i <= s.length - 1; i++) {
          
      if (amountAvailable > 0 && textToSplit.indexOf(String.fromCharCode(actualLetter)) < 0) {
        actualLetter += 1;
        i = 0;
      }
  
      if ((textToSplit[i] && textToSplit[i].charCodeAt(0) === actualLetter) && amountAvailable > 0) {
        textToSplit.splice(i, 1);
        amountAvailable -= 1;
        i = 0;
      } 
  
    }
  
    return textToSplit.join("");
  }
  
  solve('abracadabra', 12);