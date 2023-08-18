function findShort(s){
  let arr = s.split(' ')
  let shortest = arr[0].length
  
  arr.forEach((word) => {
    if (word.length < shortest) {
      shortest = word.length
    }
  })
  return shortest
}