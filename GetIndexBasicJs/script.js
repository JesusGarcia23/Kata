function getIndex(arr){
let temp = 0;
indexes = []
for(let i = 0; i < arr.length; i++){
if(temp > arr[i]){
indexes = []
temp = arr[i];
indexes.push(i)
}else if(temp === arr[i]){
indexes.push(i)
}

}
return indexes;
}