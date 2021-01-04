// For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

// In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

// Example:

// 192827764920 --> 192827000000

// 938473 --> 938000

// 2837743 --> 2830000

function manipulate(num) { 

    let numToModify = num.toString();
  
    if (numToModify.length % 2 == 0) {
      return Number(numToModify.split("").map((number, index) => {
        return index < numToModify.length / 2 ? number : "0"
      }).join(""));
    }
  
    return Number(numToModify.split("").map((number, index) => {
        return index < (numToModify.length / 2) - 1 ? number : "0"
      }).join(""));
  
  return numToModify; 
  }