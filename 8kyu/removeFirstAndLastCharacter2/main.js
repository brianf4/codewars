function array(arr){
  if (arr.split(',').length < 3){
    return null
  }else {
    let someArray = arr.split(',')
    someArray.shift()
    someArray.pop()
    return someArray.join(' ')
  }
        
}