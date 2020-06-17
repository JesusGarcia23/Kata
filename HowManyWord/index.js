// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

function testit(s){
    let word = ""
    let counter = 0;
    for(let i = 0; i < s.length; i++) {
      switch(s[i].toLowerCase()) {
        case "w": {
          if(word === "") { word += s[i].toLowerCase() }
          break;
        }
        case "o": {
          if(word === "w") { word += s[i].toLowerCase() }
          break;
        }
        case "r": {
          if(word === "wo") { word += s[i].toLowerCase() }
          break;
        }
        case "d": {
          if(word === "wor") { word += s[i].toLowerCase() }
          break;
        }
        default: {
          break;
        }
      }
  
      if(word === "word") {
        counter++;
        word = "";
      }
  
    }
    return counter;
  }
  

  // Regular expression version

  function testit(s) {
    return (s.match(/w.*?o.*?r.*?d/ig) || []).length;
  }