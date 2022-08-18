function multipleOfIndex(array) {
    let arr = [];
    array.forEach((ele, i) => ele % i === 0 ? arr.push(ele) : null)
    return arr
  }