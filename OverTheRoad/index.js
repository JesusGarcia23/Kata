// Given your house number address and length of street n, give the house number on the opposite side of the street.

// overTheRoad(address, n)
// overTheRoad(1, 3) = 6
// overTheRoad(3, 3) = 4
// overTheRoad(2, 3) = 5
// overTheRoad(3, 5) = 8

function overTheRoad(address, n){
  return n + (n - address) + 1
}