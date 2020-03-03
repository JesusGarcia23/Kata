function isVeryEvenNumber(n) {

    while(n > 9) {
        let separateNumbers;
        let sum = 0;
        separateNumbers = n.toString();
        for(let i = 0; i < separateNumbers.length; i++){
          sum += Number(separateNumbers.charAt(i));
          n = sum;
    }
    }
      return n % 2 == 0;
  }
  

  isVeryEvenNumber(5);