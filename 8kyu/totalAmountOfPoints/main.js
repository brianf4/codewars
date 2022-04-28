function points(games) {
  let points = 0;
  games.forEach(ele =>{
    if (Number(ele[0]) > Number(ele[2])){
      return points += 3
    } else if (Number(ele[0]) === Number(ele[2])){
      return points += 1
    }
  })
  return points
}