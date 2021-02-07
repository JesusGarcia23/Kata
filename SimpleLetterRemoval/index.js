// In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

// - first remove all letter 'a', followed by letter 'b', then 'c', etc...
// - remove the leftmost character first.

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