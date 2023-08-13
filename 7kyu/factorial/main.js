function factorial(n){
  if (n < 0 || n > 12) {
    throw new RangeError("Range must be between 1 and 11")
  }
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i
  }
  return sum
  
}