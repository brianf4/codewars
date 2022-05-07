function highAndLow(numbers){
  let arr = numbers.split(' ').map(element => Number(element))
  let high = Math.max(...arr)
  let low = Math.min(...arr)
  
  return `${high} ${low}`
}