function solution(str){
    let myArr = []
    let flag = true;
    let i = 0;
  
    if(str === ""){
      return myArr;
    }
  else{
    while(flag) {
  
      if(i+1 === str.length) {
        myArr.push(`${str.charAt(i)}_`)
      }else{
        myArr.push(`${str.charAt(i)}${str.charAt(i+1)}`)
      }
  
      i += 2
  
      if(i >= str.length) {
        flag = false;
      }
    }
  }
}