// There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

// You are given money in nominal value of n with 1<=n<=1500.

// Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

// Good Luck!!!

function solve(n) {
  let count = 0;
if(n % 10 !== 0)
  return -1

while(n >= 500) { n -= 500; count++};
while(n >= 200) {n -= 200; count++};
while(n >= 100) {n -= 100; count++ };
while(n >= 50) {n -= 50; count++};
while(n >= 20) {n -= 20; count++ };
while(n >= 10) {n -= 10; count++};

return count;
}

// VERSION 1
// function solve(n) {
//   let nomines = [500, 200, 100, 50, 20, 10];
//   let amount = n;
//   let times = 0;
//   let iterator = 0;
//   if(n % 10 !== 0) {
//     return -1;
//   }
//   while(amount > 0) {
//     if(amount >= nomines[iterator]) {
//       amount = amount - nomines[iterator];
//       times++;
//     }else{
//       iterator++;
//     }
//   }
//   return times;
// }