function twoSort(s) {
  s.sort()
  let firstValue = '';
  for (let i = 0; i <= s[0].length - 1; i++){
    if (i === (s[0].length - 1)) {
      firstValue += s[0][i]
      break;
    }else {
      firstValue += `${s[0][i]}***`
    }
    console.log(i)
  }
  return firstValue;
}