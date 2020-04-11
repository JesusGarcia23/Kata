// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

//version 3
reverse = function(array) {
    return array.map((value, index) => array[(array.length - 1) - index])
  }

//version 2
reverse = function(array) {
    let limiter = array.length % 2 === 0 ? (array.length / 2) : Math.floor(array.length / 2)
    for(let i = 0; i < limiter; i++) {
      temp = array[i];
      array[i] = array[(array.length - 1) - i];
      array[(array.length - 1) - i] = temp;
    }
    return array;
  }


  //version 1
  reverse = function(array) {
      let newArray = [];
    for(let i = array.length; i >= 0; i--) {
      newArr.push(array[i])
    }
    return newArray;
  }

  reverse = function(array) {
    let newArray = [];
  for(let i = array.length; i >= 0; i--) {
    newArr.push(array[i])
  }
  return newArray;
}