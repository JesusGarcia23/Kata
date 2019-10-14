function oddOne(arr) {
let theNumber = arr.filter(eachElement => {
return (eachElement % 2 !== 0)
})
return arr.indexOf(theNumber[0]);
}