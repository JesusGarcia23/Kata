// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. 
//The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.


function solution(digits){
  return digits.toString().split("").map((value, index) => {
    return Number(digits.toString().substr(index, 5));
  }).sort((a, b) => b - a)[0]
}

// FOR LOOP VERSION
function solution(digits){
  let myDigits = digits.toString();
  let biggest = 0;
  for(let i = 0; i < myDigits.length - 4; i++) {
    if(Number(myDigits.substr(i, 5)) > biggest) {
      biggest = Number(myDigits.substr(i, 5));
    }
  }
  return biggest;
}