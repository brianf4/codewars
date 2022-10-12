var cubeChecker = function(volume, side){
    if (volume <= 0 || side <= 0) {
      return false 
    } else if (Math.cbrt(volume) === Math.floor(side)) {
      return true
    } else {
      return false
    }
    
  };