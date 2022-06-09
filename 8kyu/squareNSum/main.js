function squareSum(numbers){
  return numbers.reduce((sum, current) => sum + Math.pow(current, 2) , 0)
}