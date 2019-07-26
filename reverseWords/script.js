function reverseWords(str) {
  let newWord = "";
  let reverseStr = str.split(" ");
 for(let i = 0; i < reverseStr.length; i++){
 newWord += reverseStr[i].split("").reverse().join("");
 newWord += " ";
// console.log(finalWord);
 }
 return newWord.slice(0, newWord.length - 1);
//return newWord.split(0, newWord.length - 1);

  
}