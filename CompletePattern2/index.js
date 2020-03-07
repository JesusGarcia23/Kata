function pattern(n){
 var output="";
 var decrease = 0;
   for(let i = n; i > 0; i--){
     for(let j = n; j > decrease; j--){
       output += j
     }
     if(i > 1){
        output += '\n'
     }
     decrease++;
   }
 return output;
}