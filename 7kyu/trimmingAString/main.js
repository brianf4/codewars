function trim(str,size){
    if (str.length <= size) return str
    else if (str.length <= 3 || size <= 3){
        let result = str.slice(0, size) + "...";
        return result;
    }
    else {
        let result = str.slice(0, size - 3) + "...";
        return result;
    }
  }