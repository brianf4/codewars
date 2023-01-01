function findMatchedByPattern(pattern) {
  return function predicate(str) {
    str = str.split('')
    let lastWordIndex = -1;
    for(var i=0;i<pattern.length;i++) {
      const idx = str.findIndex(x => x === pattern[i])
      if (idx >=0&&lastWordIndex<idx){
        lastWordIndex = idx
        delete str[idx]
      } else{
        return false
      }
    }
    return true
  } 
}