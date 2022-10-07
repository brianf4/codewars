function toCsvText(array) {
    let str = ''
   for (let i = 0; i <= array.length - 1; i++){
     if (i == array.length - 1){
       str += array[i].join()
     } else {
       str += array[i].join() + '\n' 
     }
   }
    return str
  }