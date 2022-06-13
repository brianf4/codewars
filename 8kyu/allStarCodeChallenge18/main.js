function strCount(str, letter){  
  let counter = 0;
  
  str.split('').forEach((ele) => ele === letter ? counter++ : null)
  return counter
}