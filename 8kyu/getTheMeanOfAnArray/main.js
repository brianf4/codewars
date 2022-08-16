function getAverage(marks){
    let total = marks.reduce((sum, current) => sum + current)
    return Math.floor(total / marks.length)
  }