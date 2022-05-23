function removeExclamationMarks(s) {
  return s.split('').filter((ele) => ele !== '!').join('')
}