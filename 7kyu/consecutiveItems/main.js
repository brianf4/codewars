function consecutive(arr, a, b) {
  return arr[arr.indexOf(a) + 1] === b || arr[arr.indexOf(b) + 1] === a ? true : false
}