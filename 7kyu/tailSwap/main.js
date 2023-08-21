function tailSwap(arr) {
  let newArr = arr.map((str) => {
   return str.split(':')
 })
  let firstTail = newArr[0][1]
  let secondTail = newArr[1][1]
  newArr[0].splice(1, 1, secondTail)
  newArr[1].splice(1, 1, firstTail)
  
  return [newArr[0].join(':'), newArr[1].join(':')]
}