function multipleOfIndex(array) {
  return array.filter((eachNumber, index) => {
  return eachNumber % index === 0
  })
}