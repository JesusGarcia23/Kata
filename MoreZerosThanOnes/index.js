// Create a moreZeros function which will receive a string for input, 
//and return an array containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

// You should remove any duplicate characters, keeping the first occurence of any such duplicates, 
//so they are in the same order in the final array as they first appeared in the input string.

// Examples

// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False

//         --> ['a','b','d']

// 'DIGEST'--> ['D','I','E','T']
// All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

function moreZeros(s){
    let result = s.split("").filter(letter => {
      return letter.charCodeAt(0).toString(2).split("").sort().indexOf("1") > 3;
    })
  
    return [...new Set(result)];
  }