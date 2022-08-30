function correct(string){
  const misinterpreted = ['5', '0', '1']

  let someArr = string.split('')
 
  for (let i = 0; i < someArr.length; i++){
    if (misinterpreted.includes(someArr[i])) {
      switch (someArr[i]) {
        case '5':
          someArr.splice(i, 1, 'S')
          break;
        case '0':
          someArr.splice(i, 1, 'O')
          break;
        case '1':
          someArr.splice(i, 1, 'I')
          break; 
  }
  }
}
  return someArr.join('')
}