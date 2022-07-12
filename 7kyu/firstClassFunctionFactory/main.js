function factory(x){
    
    function otherFunction(arr){
      return arr.map((ele) => ele * x)
    }
      return otherFunction
  }