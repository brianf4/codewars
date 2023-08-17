function lastManStanding(n){
  let arr = [];

    
  for (let i = 2; i <= n; i+=2) {
    arr.push(i)
  }
  
  while (true) {
    arr = arr.reverse().filter((num, i) => i % 2 !== 0)
    
    if (arr.length === 1) {
      return arr[0];
    }
  }
}