function generateRange(min, max, step){
  let rangeArray = []
  
  while(min <= max){
    rangeArray.push(min)
    min += step
  }
  return rangeArray
}