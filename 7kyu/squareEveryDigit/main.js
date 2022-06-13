function squareDigits(num){
  let arr = num.toString().split('')
    
  return Number(arr.map((num) => num**2).join(''))
}