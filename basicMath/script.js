function calculate(str) {
 let count = 0;
let newStr = str.split(/(\d+)/)

for(let i = 1; i < newStr.length; i++){
  if(newStr[i] === "plus"){  count += Number(newStr[i+1])}
  else if(newStr[i] === "minus"){ count -= Number(newStr[i+1])  }
}
count += Number(newStr[1]);

return count.toString();
}