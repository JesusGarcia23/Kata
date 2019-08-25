function countSheeps(arrayOfSheep) {
    let newArray = arrayOfSheep.filter((eachSheep) =>{
      return eachSheep === true;
    })
    return newArray.length
    }
    
    countSheeps(theArray);