function findDifference(a, b) {
  let multiplesOfA = a.reduce((sum, current) => sum * current , 1)
  let multiplesOfB = b.reduce((sum, current) => sum * current , 1)
  
  return Math.abs(multiplesOfA - multiplesOfB)
}