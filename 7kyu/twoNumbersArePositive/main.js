function twoArePositive(a, b, c) {
  let positiveNumbers = 0;
  
  if (a > 0) {
    positiveNumbers++
  }
  if (b > 0) {
    positiveNumbers++
  }
  if (c > 0) {
    positiveNumbers++
  }
  
  if (positiveNumbers === 2) {
    return true
  } else {
    return false
  }
}