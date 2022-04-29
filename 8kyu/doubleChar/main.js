function doubleChar(str) {
  let someArray = str.split('')
  let newArr = [];
  
  for (let i = 0; i < someArray.length; i++){
    for (let j = 1; j <= 2; j++){
      newArr.push(someArray[i])
    }
  }
  return newArr.join('')
}