// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// => [6,7]

function largest(n,xs) {
    return xs.sort((a, b) => a - b).slice(xs.length-n);
}

// function largest(n,xs) {

//     let greatestsNumbers = [];
  
//       if (n === 0) return [];
  
//      for (let i = 0; i <= xs.length - 1; i++) {
  
//        if (greatestsNumbers.length < n) {
//          greatestsNumbers.push(xs[i]);
//        }
  
//        else {
         
//         for (let j = 0; j <= greatestsNumbers.length - 1; j ++) {
  
//           if ((greatestsNumbers[j] < xs[i])) {
//             greatestsNumbers[j] = xs[i];
//             break;
//           }
//         }
//        }
  
//        greatestsNumbers.sort((a, b) => a - b)
//      }
  
//      return greatestsNumbers;
//   }