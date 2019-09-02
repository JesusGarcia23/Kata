
function isVow(a){
    let theFilter = ["a", "e", "i", "o", "u", 97, 101, 105, 111, 117]
  
    for(let i = 0; i<= a.length; i++){
      if(theFilter.indexOf(a[i]) >= 0){
        if(typeof(a[i]) !== String){
          a[i] = String.fromCharCode(a[i]).toLowerCase();
        }
      }
    }
    return a;
  }