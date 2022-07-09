function isPalindrome(line) {
    if (typeof line === typeof '') {
      return line === line.split('').reverse().join('') ? true : false
    } else if(typeof line === typeof 123){
      return line == line.toString().split('').reverse().join('') ? true : false
    }
  }