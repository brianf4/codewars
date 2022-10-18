function modifyMultiply (str,loc,num) {
    let theString = str.split(' ')[loc]
    let arr = []
    for (let i = 0; i < num; i++) {
      arr.push(theString)
    }
    
    return arr.join('-')
  } 