// For this Kata you will have to forget how to add two numbers together.

// In simple terms our method does not like the principle of carrying over numbers and just writes down every number it calculates.

function add(num1, num2) {
    let firstNumArray = num1.toString().split("").reverse();
    let secondNumArray = num2.toString().split("").reverse();
    return Number(secondNumArray.splice(firstNumArray.length,).concat(firstNumArray.map((value, index) => 
      Number(value) + (Number(secondNumArray[index]) > 0 ? Number(secondNumArray[index]) : 0)).reverse()).join(""));
  }

add(51, 51)