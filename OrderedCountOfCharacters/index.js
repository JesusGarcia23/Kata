// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.
// For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

var orderedCount = function (text) {
    return text.split("").map((letter, index) => {
       let counter = 0;
       if(index === text.indexOf(letter)) {
            for(let i = index; i < text.length; i++) {
              text.charAt(i) === letter ? counter++ : 0;
            }
            return [letter, counter]
       } else {
         return null;
       }
    
     }).filter(value => value !== null)
    
    }