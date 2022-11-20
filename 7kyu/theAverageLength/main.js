function averageLength(arr) { 
  let total = 0;
  
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].length
  }
  let avg = Math.round(total / arr.length)
  
  return arr.map((char, i) => char = char[0].repeat(avg))
}