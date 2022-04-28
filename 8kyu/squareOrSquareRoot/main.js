function squareOrSquareRoot(array){
  return array.map(e => Math.sqrt(e) % 1 === 0 ? Math.sqrt(e) : e * e)
}