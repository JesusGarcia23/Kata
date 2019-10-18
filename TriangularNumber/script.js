function sumTriangularNumbers(n) {
  let result = 0;
  for(let i = 1; i <= n; i++){
    result += (i * (i+1)) / 2
  }
 return result

}