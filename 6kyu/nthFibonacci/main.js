function nthFibo(n) {
  let arr = [] 
  let num = 0;

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      arr.push(i)
    } else {
      num = arr[i - 2] + arr[i - 1]
      arr.push(num)
    }
  }
  return arr[n - 1]
}