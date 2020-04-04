var number=function(array){
  //your awesome code here
  return array.map((value, index) => {
    return `${index + 1}: ${value}`
  })
}