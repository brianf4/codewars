function duplicateEncode(word){
  let arr = word.toLowerCase().split('')
  
  return arr.map((char) => arr.indexOf(char) === arr.lastIndexOf(char) ? "(" : ")").join('')
 
}