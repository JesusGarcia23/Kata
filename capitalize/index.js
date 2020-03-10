// VERSION 6

function capitalize(s){
    let text = "";
    let j = 0;
    for(let i = 0; i < s.length * 2; i++){
      if(i >= s.length ) {
        j = i - s.length;
        text += j % 2 !== 0 ? s[j].toUpperCase() : s[j].toLowerCase()
      }else{
        text += i % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase()
      }
      i === s.length - 1 ? text += " " : null;
  
    }
    return text.split(" ");
  };
  
  // VERSION 5
  
  // function capitalize(s){
  //   let arr = [];
  //   let text = "";
  //   let j = 0;
  //   while(j < 2){
  //   for(let i = 0; i < s.length; i++){
  //     if(j % 2 === 0) {
  //       text += i % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase()
  //     }else{
  //       text += i % 2 !== 0 ? s[i].toUpperCase() : s[i].toLowerCase()
  //     }
  //   }
  //   j === 0 ? text += " " : null
  //   j++;
  //   }
  //   return text.split(" ").splice(0,2);
  // };
  
  //VERSION 4
  
  // function capitalize(s){
  //   let arr = [];
  //   while(arr.length < 2){
  //   let text = "";
  //   for(let i = 0; i < s.length; i++){
  //     if(arr.length % 2 === 0) {
  //       text += i % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase()
  //     }else{
  //       text += i % 2 !== 0 ? s[i].toUpperCase() : s[i].toLowerCase()
  //     }
  //   }
  //   arr.push(text);
  //   }
  //   return arr;
  // };
  
  
  
  // VERSION 3
  
  // function capitalize(s, arr = [], limit = 2){
  //   let text = "";
  //   let actualArr = arr || []
  //   if(limit > 0){
  
  //     if(limit % 2 === 0) {
  //       for(let i = 0; i < s.length; i++) {
  //          text += i % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase()
  //       }
  //     }else{
  //       for(let i = 0; i < s.length; i++) {
  //          text += i % 2 !== 0 ? s[i].toUpperCase() : s[i].toLowerCase()
  //       }
  //     }
  //     actualArr.push(text);
  //     capitalize(s, actualArr, limit - 1);
  //   }
  //   return arr;
  // };
  
  
  // VERSION 2
  
  // function capitalize(s, arr = [], limit = 2){
  //   let myArr = [];
  //   let text;
  //   let j;
  //   for(let i = 0; i < 2; i++) {
  //     j = 0;
  //     text = "";
  //     while(j < s.length){
  //       if(i % 2 === 0 && j % 2 === 0){
  //         text += s[j].toUpperCase();
  //       }else if(i % 2 !== 0 && j % 2 !== 0){
  //         text += s[j].toUpperCase();
  //       }else{
  //         text += s[j].toLowerCase();
  //       }
  //       j++;
  //     }
  //     myArr.push(text);
  //   }
  //   return myArr;
  // };
  
  
  // VERSION 1
  
  // function capitalize(s){
  //   let myArr = [];
  //   let text = "";
  //   let text2 = "";
  //   for(let i = 0; i < s.length; i++) {
  //      text += i % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase()
  //   }
  //   myArr.push(text);
  
  //   for(let i = 0; i < s.length; i++) {
  //      text2 += i % 2 !== 0 ? s[i].toUpperCase() : s[i].toLowerCase()
  //   }
  
  //   myArr.push(text2);
  
  //   return myArr;
  // };
  
  capitalize('codewars')