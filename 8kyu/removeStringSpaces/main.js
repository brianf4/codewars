function noSpace(x){
  let newString = x.split(' ');
  newString.forEach((word, index) => word === '' ? newString.splice(index, 1) : word)
  return newString.join('')
}