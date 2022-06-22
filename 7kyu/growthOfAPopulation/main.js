function nbYear(p0, percent, aug, p) {
  let inhabitants = p0 + (p0 * (percent / 100)) + aug
  let year = 1;

  while (inhabitants < p){
    inhabitants = inhabitants + (Math.floor(inhabitants * (percent / 100))) + aug
    console.log(inhabitants)
    year++
  }
    
  
  return year
}