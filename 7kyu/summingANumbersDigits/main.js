function sumDigits(number) {
  let strNum = Math.abs(number)
  strNum = strNum.toString().split('')
  let sum = 0; 
  
  for (let i = 0; i < strNum.length; i++) {
    sum += Number(strNum[i])
  }
  return sum
}