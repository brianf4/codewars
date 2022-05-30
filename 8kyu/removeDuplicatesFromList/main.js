function distinct(a) {
  let res = [];
  a.forEach( el => !res.includes(el) ? res.push(el) : 0);
  return res;
}