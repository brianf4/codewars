function isPalindrome(x) {
  if (x.toLowerCase().split('').reverse().join('') === x.toLowerCase()){
    return true
  }else {
    return false
  }
}