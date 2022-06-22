function sumArray(array) {
    if (array == null || array <= 2) {
      return 0
    }else {
      let arr = array.sort((a,b) => a - b)
      arr.shift()
      arr.pop()
      return arr.reduce((sum, current) => sum + current ,0)
    }
  }