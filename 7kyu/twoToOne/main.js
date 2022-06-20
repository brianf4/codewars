function longest(s1, s2) {
  let output = [];
  let combi = s1.concat(s2);
  let array = combi.split('').sort();

  for (let i = 0; i <= array.length; i++) {
      console.log(array[i]);//test
      if (!output.includes(array[i]) ) {
            output.push(array[i]);
      }
  }
  return output.join('');
}
console.log(longest('xyaaAbbbccccdefww', 'xxxxyyyyabklmopq'));