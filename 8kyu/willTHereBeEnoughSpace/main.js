function enough(cap, on, wait) {
    if ((on + wait) <= cap){
      return 0
    }else if ((on + wait) > cap){
      return Math.abs((cap - on) - wait)
    }
  }