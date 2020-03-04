function pattern(n){
    var output="";
      // Happy Coding ^_^
      for(let i = 1; i <= n; i++){
        for(let j = 0; j < i; j++){
          output += `${i}`
        }
        if(i !== n) {
           output += "\n"
        }
      }
    return output;
   }