function isPalindrome(x) {
  let newWord = x.split("").reverse().join("");
  if(newWord.toLowerCase() === x.toLowerCase()){
    return true;
  }else{
    return false;
  }
  }