function openOrSenior(data){
  let output = [];
  
  data.forEach((pair) => {
    if (pair[0] >= 55 && pair[1] > 7){
      output.push('Senior')
    }else{
      output.push('Open')
    }
  })
  return output
}