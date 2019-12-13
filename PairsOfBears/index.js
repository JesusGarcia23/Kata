function bears(x, s){
    return s.match(/B8|8B/g) !== null? 
    [s.match(/B8|8B/g).join(''), s.match(/B8|8B/g).length >= x] : ["", 0 >= x]
  }