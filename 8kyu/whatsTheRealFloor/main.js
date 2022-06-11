function getRealFloor(n) {
  if(n === 0 || n === 1){
    return 0
  }else if(n > 13){
    return n - 2
  } else if(n < 0){
    return n 
  }else {
    return n - 1
  }
}