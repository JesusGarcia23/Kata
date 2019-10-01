function save(sizes, hd){

    let saved = 0;
    let sum = 0
    
    sizes.forEach(eachFile => {
     sum += eachFile
      if(sum <= hd){
        saved++;
      }
    })
    return saved;
    }