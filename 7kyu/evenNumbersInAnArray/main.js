function evenNumbers(array, number) {
  let counter = 0
  let reversed = array.reverse()
  let newArr = []
  for (let i = 0; i < array.length; i++){
    if (reversed[i] % 2 === 0){
      newArr.push(reversed[i])
      counter++
      if (counter === number){
        break;
      }
    }
  }
  return newArr.reverse()
}