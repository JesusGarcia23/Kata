function twoOldestAges(ages){
return ages.sort((a, b) => {return b - a}).splice(0,2).sort((a, b
) => { return a - b })
}