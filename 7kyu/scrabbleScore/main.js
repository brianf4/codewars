function scrabbleScore(str){
    if (str === ''){
      return 0
    }
    
    let total = 0;
    str.split('').forEach((ele, i, arr) => ele === ' '? ele : total += $dict[ele.toUpperCase()])
    
    return total
  }