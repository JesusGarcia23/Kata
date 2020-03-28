function letterCheck(arr) {
    for(let i = 0; i < arr[1].length; i++) {
      if(arr[0].toLowerCase().indexOf(arr[1].charAt(i).toLowerCase()) < 0){
        return false;
      }
    }
    return true;
    }