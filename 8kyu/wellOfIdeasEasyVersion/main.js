function well(arr){
  let counter = 0;
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 'good'){
      counter++
    }
  }
  
  if(counter === 0){
    return 'Fail!'
  }else if (counter <= 2){
    return 'Publish!'
  }else if (counter > 2){
    return 'I smell a series!'
  }
  
}