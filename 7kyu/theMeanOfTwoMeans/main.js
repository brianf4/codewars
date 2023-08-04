function getMean(arr, x, y) {
  if (x <= 1 || y <= 1 || y > arr.length) {
    return -1
  } else if (x > arr.length) {
    return -1
  }
  
  let firstXMean = 0;
  let lastYMean = 0;
  
  for (let i = 0; i < x; i++) {
    firstXMean += arr[i]
  }
  firstXMean = firstXMean / x
                                
  for (let i = arr.length - 1; i > (arr.length - 1) - y; i--) {
    lastYMean += arr[i]
  }
  lastYMean = lastYMean / y
  
  return (firstXMean + lastYMean) / 2
}