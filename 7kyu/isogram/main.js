function isIsogram(str){
    let arr = new Set(str.toLowerCase())
   return str.length === arr.size ? true : false
  }