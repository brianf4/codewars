function pipeFix(numbers){
  let first = numbers[0];
  let last = numbers[numbers.length-1];
  
  let arr = [];
  for(let i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}