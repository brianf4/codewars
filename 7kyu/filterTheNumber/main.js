var filterString = function(value) {
    return Number(value.split('').filter(a => a <= '9' && a >= '0').join(''))
  }