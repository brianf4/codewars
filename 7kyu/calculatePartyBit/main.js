function checkParity(parity, bin){
    let arr = bin.split('')
    
    let count1s = 0;
    
    arr.forEach((one) => {
      if (one === '1') {
        count1s++
      }
    })
    
    if (parity === 'even' && count1s % 2 === 0) {
      return 0
    } else if (parity === 'odd' && count1s % 2 === 1) {
      return 0
    } else {
      return 1
    }
    
    
  }