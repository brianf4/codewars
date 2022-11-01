function stringTransformer(str) {
  let reversedStr = str.split(' ').reverse().join(' ')
  return reversedStr.split('').map((char) => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('')
}