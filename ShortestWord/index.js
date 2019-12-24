function findShort(s){
    return s !== "" ? s.split(" ").sort((a,b) => {
       if(a.length > b.length) return 1
       else if(a.length < b.length) return -1
       else return 0
     })[0].length : ""
   
   }