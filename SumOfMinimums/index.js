function sumOfMinimums(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
      arr[i].sort((a, b) => { return a - b})
      total += arr[i][0]
    }
    return total
  }