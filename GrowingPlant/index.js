function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let theValue = 0
  let days = 0
  if(upSpeed >= desiredHeight){
    return 1
  }else{
while(theValue <= desiredHeight){
    days += 1
    theValue += upSpeed
     if(theValue >= desiredHeight){
       break;
     }else{
       theValue -= downSpeed
        days += 1
     }

  }
  }

  return Math.round(days / 2)

}