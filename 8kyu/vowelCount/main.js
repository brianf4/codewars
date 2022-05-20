function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  str.split('').forEach(letter => {
    for (let i = 0; i < vowels.length; i++){
      if (letter === vowels[i]){
        vowelsCount++;
        break;
      }
    }
  });
  
  return vowelsCount;
}