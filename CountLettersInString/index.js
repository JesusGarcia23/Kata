function letterCount(s){
  let letters = {}
  let letterArray = s.split('').sort()
  for(let i = 0; i < letterArray.length; i++){
  letters[letterArray[i]] === undefined ? letters[letterArray[i]] = 1 : letters[letterArray[i]] += 1
  }
  return letters
}