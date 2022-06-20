function sumOfDifferences(arr) {
    if (arr.length < 2) {
      return 0
    }
     
     let total = 0;
     let newArr = arr.sort((a,b) => b - a)
     
     for (let i = 0; i < newArr.length; i++){
       if (i === newArr.length - 1){
           break;
       }else {
           total += (newArr[i] - newArr[i + 1])
       }
     }
     return total
   }
   