const arr = N => {
  if (N === 0 || N === null) {
    return []
  }else {
    let someArr = [];
    for (let i = 0; i <= N - 1; i++) {
      someArr.push(i)
    }
    return someArr
  }
};