function betterThanAverage(classPoints, yourPoints) {
  //get average
let averageClass = classPoints.reduce((count, eachGrade) => {
  return count += eachGrade;
}, 0);

 return (averageClass / classPoints.length) < yourPoints;

}
