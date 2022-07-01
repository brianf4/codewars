function maxRot(n) {
  
  let arr = n.toString().split('').map((ele) => Number(ele))
  let findMaxArr = [n]
  
  for (let i = 0; i < arr.length; i++){
    let num = arr[i]
    arr.splice(i, 1)
    arr.push(num)
    findMaxArr.push(Number(arr.join('')))
  }
 
  return Math.max(...findMaxArr)
  
}