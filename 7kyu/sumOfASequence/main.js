const sequenceSum = (begin, end, step) => {
  let arr = []
  
  if (begin > end){
    return 0
  }
  
  for (let i = begin; i <= end; i += step){
    arr.push(i)
  }
  
  return arr.reduce((sum, current) => sum + current, 0)
};