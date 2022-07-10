function maskify(cc) {
    if (cc.length <= 4){
      return cc
    }else {
      return cc.split('').reverse().map((ele, i) => i < 4 ? ele : ele = '#').reverse().join('')
    }  
  }