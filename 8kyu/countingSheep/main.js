function countSheeps(arrayOfSheep) {
  let counter = 0;
  arrayOfSheep.forEach(element => element === true ? counter++ : null)
  return counter;
}