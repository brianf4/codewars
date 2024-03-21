function spacey(array) {
  let arr = []; 
  let string = ''
  
  for (let i = 0; i < array.length; i++) {
    string += array[i];
    arr.push(string);
  }
  
  return arr;
  
}
