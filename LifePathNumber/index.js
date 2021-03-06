// A person's Life Path Number is calculated by adding each individual number in that person's date of birth, 

// until it is reduced to a single digit number.

// Complete the function that accepts a date of birth (as a string) in the following format: "yyyy-mm-dd". 

// The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.

// You do not need to check that the input is correct format,

// you can assume that it will always be a valid date (as a string) with given format.

// Example
// For example, Albert Einstein's birthday is March 14, 1879 ("1879-03-14"). 

// The calculation of his Life Path Number would look like this:

// year  :  1 + 8 + 7 + 9 = 2  -->  2 + 5 = 7
// month :  0 + 3 = 3
// day   :  1 + 4 = 5
// result:  7 + 3 + 5 = 15  -->  1 + 5 = 6

function lifePathNumber(dateOfBirth) {

    return sumDigits(dateOfBirth.split("-").map(digit => {
      let digitArray = digit.split("");
      return  sumDigits(digitArray);
    }))
  
  }
  
const sumDigits = (digitArray) => {
    let i = 0;
    let actualValue = 0;
    while(i < digitArray.length) {
        actualValue += Number(digitArray[i]);
        i++;
    }

    if (i === digitArray.length && actualValue >= 10) {
        return sumDigits(actualValue.toString().split(""))
    }

    return actualValue;
}
  
  lifePathNumber("1879-03-14")