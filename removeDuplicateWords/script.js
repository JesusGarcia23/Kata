function removeDuplicateWords (s) {
    let arrayOfWord = s.split(" ");
     let duplicateRemoved = []
    
     for(let i = 0; i < arrayOfWord.length; i++){
       if(duplicateRemoved.indexOf(arrayOfWord[i]) < 0){
         duplicateRemoved.push(arrayOfWord[i]);
       }
     }
            return duplicateRemoved.join(" ");
    }