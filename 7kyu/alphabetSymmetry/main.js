function solve(arr){  
  const numOfPos = [];
  
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].toLowerCase().charCodeAt(0) - 97 === j) {
        counter++
      }
    }
    numOfPos.push(counter)
  }
  return numOfPos
};