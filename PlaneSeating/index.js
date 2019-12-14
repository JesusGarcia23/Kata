function planeSeat(a){
    let theSeat = a.match(/^[0-9]{1,2}[:.,-]?|[A-Z]$/g)
    let theNumber = Number(theSeat[0])
    let theLetter = theSeat[1]
    let location = ''
    if(theNumber >= 1 && theNumber <= 20){
      location += 'Front-'
    }else if(theNumber >= 21 && theNumber <= 40){
      location += 'Middle-'
    }else if(theNumber >= 41 && theNumber <= 60){
      location += 'Back-'
    }
  
    if(theLetter >= "A" && theLetter <= "C" && theNumber <= 60){
      location += 'Left'
    }else if(theLetter >= "D" && theLetter <= "F" && theNumber <= 60){
      location += 'Middle'
    }else if(theLetter >= "G" && theLetter <= "K" && (theLetter !== "I") && ( theLetter !== "J") && theNumber <= 60){
      location += 'Right'
    }
  
    else{
      location = "No Seat!!"
    }
  
    return location
  }