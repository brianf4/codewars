function solution(a, b){
  if (a.length > b.length){
    return b + a + b
  }else {
    return a + b + a
  }

  //or
  //a.length > b.length ? b + a + b : a + b + a
}