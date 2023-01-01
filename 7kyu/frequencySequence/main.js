function freqSeq(str, sep) {
  
 let countedArray = [];
  let splittedSentence= str.split("");
  for(let i = 0; i < splittedSentence.length; i++){
  let result = 0;
    for(let j = 0; j <splittedSentence.length; j++){
      
      if(splittedSentence[i]===splittedSentence[j]){
        result++;
      }
      
    }
        countedArray.push(result);
    
  }
  return countedArray.join(sep);
}