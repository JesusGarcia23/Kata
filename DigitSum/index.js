// So, your task is to sum up all the digits in string, possibly multiple times, till you get a one digit result.
// You should then return it as a string. The input will be always valid.

// For example:

// var str = '1234';
// digitSum(str);  //returns 1

// /* 1 + 2 + 3 + 4 = 10 <= this result doesn't have one digit => 1 + 0 = 1 */

// var str = '1011';
// digitSum(str);  //returns 3
// /* 1 + 0 + 1 + 1 = 3 <= this result does have one digit => 3 */

// var str = '2468';
// digitSum(str);  //returns 2
/* 2 + 4 + 6 + 8 = 20 <= this result doesn't have one digit => 2 + 0 = 2 */


//RECURSIVE VERSION
function digitSum (str) {
    str = str.split("").reduce((amount, value) => amount + Number(value), 0).toString();
    if(str.length === 1) return str
    else return digitSum(str);
  }

// WHILE LOOP VERSION
function digitSum (str) {
  let number =  str;
  while(number.length > 1) {
    number = number.split("").reduce((amount, value) => amount + Number(value), 0).toString();
  }
    return number;
}