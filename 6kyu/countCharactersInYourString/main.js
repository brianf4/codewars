function count(string) {
    let strCount = {};
    
    for (let i = 0; i < string.length; i++) {
      let letter = string[i]
      
      strCount[letter] ? strCount[letter] += 1 : strCount[letter] = 1;
    }
    return strCount;
  }