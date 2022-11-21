const removeConsecutiveDuplicates = s => {
  return s.split(' ').filter((char, i, a) => char !== a[i - 1]).join(' ')
}