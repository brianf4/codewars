function nearestSq(n){
    let higherNum = n + 1
    while (Math.sqrt(higherNum) % 1 !== 0) {
      higherNum++
    }
    let lowerNum = n - 1
    while (Math.sqrt(lowerNum) % 1 !== 0) {
      lowerNum--
    }
    if (n === 1) {
    return n
    } else if (higherNum - n < n - lowerNum) {
      return higherNum
    } else { 
      return lowerNum 
    }}