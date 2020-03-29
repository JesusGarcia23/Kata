function allNonConsecutive (arr) {
  return arr.map((number, index) => {
    return  number - 1 !== arr[index - 1] && index !== 0 ?
    {i: index, n: number} : null })
    .filter(eachValue => eachValue !== null);
}