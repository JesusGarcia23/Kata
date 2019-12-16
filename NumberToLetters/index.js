function switcher(x){
  console.log(String.fromCharCode(29))
  return x.map(eachLetter => {

  if(eachLetter === '27'){
    return "!"
  }else if(eachLetter === "28"){
    return "?"
  }else if(eachLetter === "29"){
    return " "
  }else{
return String.fromCharCode(123 - eachLetter)
  } 
}).join("")
}