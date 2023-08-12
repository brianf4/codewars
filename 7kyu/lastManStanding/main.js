function lastManStanding(n){
  let arr = Array.from({length: n}).map((_, idx) => idx + 1);
  
  while(arr.length > 1) {
    arr = arr.filter((e, idx) => idx % 2 !== 0)
    arr.reverse()
  }
  
  return arr[0]
}