function spongeMeme(sentence) {
  let arr = []
    
  for (let i = 0; i < sentence.length; i++){
    if (i % 2 === 0){
      arr.push(sentence[i].toUpperCase())
    }else {
      arr.push(sentence[i].toLowerCase())
    }
  }
  return arr.join('')
  
  
}